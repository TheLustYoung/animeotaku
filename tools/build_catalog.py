"""Builds img/*.jpg (4:5 crops of the shop's own Instagram reel covers, @animeotakuarmenia) and data/products.json for the Anime Otaku demo.
Source frames live in _raw/ (not committed). Names of characters come from the shop's own captions; items marked check=True still need confirming.
Stickers are examples from another shop (@stickershop.rnd). Prices are not published by the shop, so every price is null ("price on request")."""
import json, pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
RAW = ROOT / "_raw"
OUT = ROOT / "img"; (OUT / "products").mkdir(parents=True, exist_ok=True)

# id, source frame, crop box (x0, y0, x1, y1), name, series, category, tag, check
P = [
 ("itachi-uchiha-figure", "ig11", (0, 130, 640, 930), "Itachi Uchiha figure", "Naruto", "Фигурки", "Новая коллекция", False),
 ("roronoa-zoro-figure", "ig19", (0, 160, 540, 835), "Roronoa Zoro figure", "One Piece", "Фигурки", "", False),
 ("portgas-d-ace-figure", "ig20", (0, 40, 540, 715), "Portgas D. Ace figure", "One Piece", "Фигурки", "", False),
 ("trafalgar-law-figure", "ig27", (0, 100, 640, 900), "Trafalgar Law figure", "One Piece", "Фигурки", "", True),
 ("master-roshi-figure", "ig24", (0, 338, 640, 1138), "Master Roshi figure", "Dragon Ball", "Фигурки", "", False),
 ("shenron-figure", "ig28", (0, 200, 640, 1000), "Shenron figure", "Dragon Ball", "Фигурки", "", True),
 ("fern-figure", "ig26", (0, 170, 540, 845), "Fern figure", "Frieren", "Фигурки", "", True),
 ("tee-green-dragon", "ig10", (0, 430, 240, 730), "Anime T-shirt, green", "", "Одежда", "", True),
 ("tee-blue-red-hair", "ig10", (400, 470, 640, 770), "Anime T-shirt, blue", "", "Одежда", "", True),
 ("tee-black-red", "ig10", (190, 790, 430, 1090), "Anime T-shirt, black and red", "", "Одежда", "", True),
 ("tee-beige", "ig10", (400, 820, 640, 1120), "Anime T-shirt, beige", "", "Одежда", "", True),
 ("manga-volumes", "ig15", (0, 0, 640, 800), "Manga volumes", "", "Манга", "", True),
]

# sticker sheets from the example shop @stickershop.rnd (marked "example" in the catalogue): cut out of their collage background
# id, source frame, sheet rectangle in the 1440x1440 frame, name, series
S = [
 ("toca-life-world-stickers", "s04", (374, 220, 1070, 1240), "Toca Life World sticker pack", "Toca Boca"),
 ("standoff-2-stickers", "s07", (380, 230, 1070, 1200), "Standoff 2 sticker pack", "Standoff 2"),
 ("frogs-stickers", "s10", (400, 250, 1070, 1210), "Frogs sticker pack", ""),
]


def cutout(im, box, size=(520, 680), radius=26):
    """Crops the sheet, rounds the corners and makes everything outside the sheet transparent (the shop's collage background is gone)."""
    from PIL import ImageDraw
    sheet = im.crop(box).convert("RGBA")
    mask = Image.new("L", sheet.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, sheet.size[0] - 1, sheet.size[1] - 1), radius=radius, fill=255)
    sheet.putalpha(mask)
    sheet.thumbnail(size, Image.LANCZOS)
    return sheet


def main():
    out = []
    for pid, src, box, name, series, cat, tag, check in P:
        im = Image.open(RAW / f"{src}.jpg").convert("RGB").crop(box)
        im = im.resize((560, 700), Image.LANCZOS)
        im.save(OUT / "products" / f"{pid}.jpg", quality=86)
        out.append({"id": pid, "name": name, "series": series, "category": cat, "tag": tag, "new": tag == "Новая коллекция",
                    "price": None, "image": f"img/products/{pid}.jpg", "check": check})
    for pid, src, box, name, series in S:
        cutout(Image.open(RAW / f"{src}.jpg").convert("RGB"), box).save(OUT / "products" / f"{pid}.webp", "WEBP", quality=90, method=6)
        out.append({"id": pid, "name": name, "series": series, "category": "Стикеры", "tag": "Пример", "new": False, "price": None,
                    "image": f"img/products/{pid}.webp", "check": False, "cutout": True, "example": True})
    # store / story photos (full frames, resized)
    for name, src, w in (("store-wall", "ig10", 900), ("store-interior", "ig25", 800), ("store-figures", "ig24", 900), ("hero-itachi", "ig11", 900)):
        im = Image.open(RAW / f"{src}.jpg").convert("RGB"); im.thumbnail((w, 1600)); im.save(OUT / f"{name}.jpg", quality=85)
    data = {"demo": True, "currency": "AMD",
            "contacts": {"whatsapp": "37498281910", "telegram": "", "instagram": "animeotakuarmenia", "phone": "+374 98 281910"},
            "categories": ["Фигурки", "Одежда", "Манга", "Стикеры"], "note": "Фото: публичный Instagram магазина (@animeotakuarmenia). Цены магазин не публикует.",
            "products": out}
    (ROOT / "data").mkdir(exist_ok=True)
    (ROOT / "data" / "products.json").write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
    print(len(out), "products")

if __name__ == "__main__":
    main()
