// Three languages: ru, en, hy. The Armenian text is a studio draft: have a native speaker proofread it before publishing.
export const LANGS = ['hy', 'ru', 'en'];
export const LANG_LABEL = { hy: 'ՀԱՅ', ru: 'РУС', en: 'ENG' };

export const CAT = {
  'Фигурки': { ru: 'Фигурки', en: 'Figures', hy: 'Արձանիկներ' }, 'Одежда': { ru: 'Одежда', en: 'Apparel', hy: 'Հագուստ' },
  'Манга': { ru: 'Манга', en: 'Manga', hy: 'Մանգա' }, 'Стикеры': { ru: 'Стикеры', en: 'Stickers', hy: 'Ստիկերներ' },
};
export const TAG = {
  'Новая коллекция': { ru: 'Новая коллекция', en: 'New collection', hy: 'Նոր հավաքածու' }, 'Пример': { ru: 'Пример', en: 'Example', hy: 'Օրինակ' },
};
export const DESC = {
  'Фигурки': { ru: 'Коллекционная фигурка из магазина Anime Otaku. Цену и наличие уточняйте у менеджера.', en: 'A collectible figure from the Anime Otaku shop. Please confirm price and availability with the manager.', hy: 'Կոլեկցիոն արձանիկ Anime Otaku խանութից։ Գինը և առկայությունը հստակեցրեք մենեջերի մոտ։' },
  'Одежда': { ru: 'Аниме-футболка из магазина. Размер, цену и наличие уточняйте у менеджера.', en: 'An anime T-shirt from the shop. Please confirm size, price and availability with the manager.', hy: 'Անիմե շապիկ խանութից։ Չափսը, գինը և առկայությունը հստակեցրեք մենեջերի մոտ։' },
  'Манга': { ru: 'Тома манги на полках магазина. Названия и наличие уточняйте у менеджера.', en: 'Manga volumes from the shop’s shelves. Please confirm titles and availability with the manager.', hy: 'Մանգայի հատորներ խանութի դարակներից։ Վերնագրերը և առկայությունը հստակեցրեք մենեջերի մոտ։' },
  'Стикеры': { ru: 'Пример карточки: так в каталоге выглядят стикеры с вырезанным фоном. Фото из стороннего магазина, только для демонстрации.', en: 'An example card: this is how stickers look in the catalogue with the background removed. Photo from another shop, for demonstration only.', hy: 'Քարտի օրինակ. այսպես են երևում ստիկերները կատալոգում՝ հեռացված ֆոնով։ Լուսանկարը այլ խանութից է, միայն ցուցադրման համար։' },
};

const S = {
  // chrome
  promo1: { ru: 'Первый аниме-магазин в Ереване · Спендиаряна, 5', en: 'The first anime shop in Yerevan · 5 Spendiaryan St.', hy: 'Առաջին անիմե խանութը Երևանում · Սպենդիարյան 5' },
  promo2: { ru: 'Ежедневно 12:00–21:00', en: 'Open daily 12:00–21:00', hy: 'Ամեն օր 12:00–21:00' },
  promo3: { ru: 'Вся корзина одним сообщением в WhatsApp', en: 'Your whole cart in one WhatsApp message', hy: 'Ամբողջ զամբյուղը մեկ հաղորդագրությամբ WhatsApp-ով' },
  search: { ru: 'Поиск', en: 'Search', hy: 'Որոնում' }, cancel: { ru: 'Отмена', en: 'Cancel', hy: 'Չեղարկել' }, menu: { ru: 'Меню', en: 'Menu', hy: 'Մենյու' },
  searchPh: { ru: 'Поиск: Naruto, One Piece, футболка…', en: 'Search: Naruto, One Piece, T-shirt…', hy: 'Որոնում. Naruto, One Piece, շապիկ…' },
  navStory: { ru: 'Что такое аниме', en: 'What is anime', hy: 'Ի՞նչ է անիմեն' }, navShop: { ru: 'Магазин', en: 'Shop', hy: 'Խանութ' }, navStore: { ru: 'Мы в Ереване', en: 'Find us', hy: 'Մենք Երևանում' },
  favorites: { ru: 'Избранное', en: 'Favourites', hy: 'Ընտրյալներ' }, bag: { ru: 'Корзина', en: 'Cart', hy: 'Զամբյուղ' }, help: { ru: 'Помощь', en: 'Help', hy: 'Օգնություն' },
  allProducts: { ru: 'Все товары', en: 'All products', hy: 'Բոլոր ապրանքները' }, news: { ru: 'Новинки', en: 'New', hy: 'Նորույթներ' },
  // hero
  kick: { ru: 'Первый аниме-магазин в Ереване', en: 'The first anime shop in Yerevan', hy: 'Առաջին անիմե խանութը Երևանում' },
  heroSub: { ru: 'Фигурки, одежда, манга и мерч. Всё, что ты любишь, в одном месте на Спендиаряна, 5.', en: 'Figures, apparel, manga and merch. Everything you love in one place at 5 Spendiaryan St.', hy: 'Արձանիկներ, հագուստ, մանգա և մերչ։ Այն ամենը, ինչ սիրում ես, մեկ վայրում՝ Սպենդիարյան 5։' },
  badge: { ru: 'ежедневно', en: 'every day', hy: 'ամեն օր' },
  heroTag: { ru: 'Всё, что ты любишь, в одном месте', en: 'Everything you love in one place', hy: 'Այն ամենը, ինչ սիրում ես, մեկ վայրում' },
  heroBtn1: { ru: 'В магазин', en: 'Go to the shop', hy: 'Խանութ' }, heroBtn2: { ru: 'Что такое аниме?', en: 'What is anime?', hy: 'Ի՞նչ է անիմեն։' },
  // story
  s1k: { ru: 'Глава 1', en: 'Chapter 1', hy: 'Գլուխ 1' }, s1h: { ru: 'Что такое аниме', en: 'What is anime', hy: 'Ի՞նչ է անիմեն' },
  s1p: { ru: 'Аниме — это японская анимация: сериалы, полнометражные фильмы и короткие истории, нарисованные в особой манере. Здесь есть всё: приключения и спорт, фантастика и повседневность, комедия и драма. Его смотрят и дети, и взрослые, потому что в нём говорят о дружбе, свободе, потере и выборе, а не только о драках и роботах.', en: 'Anime is Japanese animation: series, feature films and short stories drawn in a distinctive style. It has everything: adventure and sports, sci-fi and everyday life, comedy and drama. Kids and adults watch it because it talks about friendship, freedom, loss and choice, not only about fights and robots.', hy: 'Անիմեն ճապոնական անիմացիան է. սերիալներ, լիամետրաժ ֆիլմեր և կարճ պատմություններ՝ գծված յուրահատուկ ոճով։ Այստեղ կա ամեն ինչ՝ արկած և սպորտ, ֆանտաստիկա և առօրյա, կատակերգություն և դրամա։ Այն դիտում են և՛ երեխաները, և՛ մեծերը, որովհետև խոսում է բարեկամության, ազատության, կորստի և ընտրության մասին, ոչ միայն մարտերի ու ռոբոտների։' },
  s2k: { ru: 'Глава 2', en: 'Chapter 2', hy: 'Գլուխ 2' }, s2h: { ru: 'Как это стало мировым явлением', en: 'How it became a global phenomenon', hy: 'Ինչպես դարձավ համաշխարհային երևույթ' },
  t1y: { ru: '1963', en: '1963', hy: '1963' }, t1h: { ru: 'Astro Boy', en: 'Astro Boy', hy: 'Astro Boy' },
  t1p: { ru: 'Выходит «Могучий Атом»: первый популярный японский телесериал в том стиле, который мир узнаёт как аниме.', en: 'Astro Boy premieres: the first popular Japanese TV series in the style the world now knows as anime.', hy: '«Աստրո Բոյ»-ը առաջին հանրահայտ ճապոնական հեռուստասերիալն է այն ոճով, որը աշխարհն այսօր ճանաչում է որպես անիմե։' },
  t2y: { ru: '1985', en: '1985', hy: '1985' }, t2h: { ru: 'Studio Ghibli', en: 'Studio Ghibli', hy: 'Studio Ghibli' },
  t2p: { ru: 'Хаяо Миядзаки и его команда создают студию Ghibli. Её фильмы показывают, что анимация бывает глубокой и для взрослых.', en: 'Hayao Miyazaki and his team found Studio Ghibli. Its films show that animation can be deep and made for adults too.', hy: 'Հայաո Միյազակին և իր թիմը հիմնում են Ghibli ստուդիան։ Նրա ֆիլմերը ցույց են տալիս, որ անիմացիան կարող է լինել խորը և նաև մեծահասակների համար։' },
  t3y: { ru: '2003', en: '2003', hy: '2003' }, t3h: { ru: '«Оскар»', en: 'The Oscar', hy: '«Օսկար»' },
  t3p: { ru: '«Унесённые призраками» — первый аниме-фильм, получивший «Оскар» за лучший анимационный фильм.', en: 'Spirited Away becomes the first anime film to win the Academy Award for Best Animated Feature.', hy: '«Ոգեկոչված»-ը (Spirited Away) առաջին անիմե ֆիլմն է, որը ստացավ «Օսկար» լավագույն անիմացիոն ֆիլմի համար։' },
  t4y: { ru: '2020', en: '2020', hy: '2020' }, t4h: { ru: 'Demon Slayer', en: 'Demon Slayer', hy: 'Demon Slayer' },
  t4p: { ru: '«Клинок, рассекающий демонов: Поезд Бесконечность» собирает более $500 млн и становится самым кассовым фильмом в истории Японии.', en: 'Demon Slayer: Mugen Train earns over $500 million and becomes the highest-grossing film in Japan’s history.', hy: '«Demon Slayer: Mugen Train»-ը հավաքում է ավելի քան $500 մլն և դառնում Ճապոնիայի պատմության ամենաշատ եկամուտ բերած ֆիլմը։' },
  s3k: { ru: 'Глава 3', en: 'Chapter 3', hy: 'Գլուխ 3' }, s3h: { ru: 'Цифры, которые это показывают', en: 'The numbers behind it', hy: 'Թվեր, որոնք դա ապացուցում են' },
  n1: { ru: '3,3 трлн иен', en: '¥3.3 trillion', hy: '3,3 տրլն իեն' }, n1p: { ru: 'выручка индустрии аниме в 2023 году, рекорд', en: 'anime industry revenue in 2023, a record', hy: 'անիմե արդյունաբերության եկամուտը 2023 թվականին, ռեկորդ' },
  n2: { ru: '51,5%', en: '51.5%', hy: '51,5%' }, n2p: { ru: 'выручки приходится на зарубежные рынки: мир смотрит аниме больше, чем сама Япония', en: 'of revenue comes from overseas: the world now spends more on anime than Japan itself', hy: 'եկամտի բաժինը արտասահմանյան շուկաներից է. աշխարհը անիմեի վրա ավելի շատ է ծախսում, քան հենց Ճապոնիան' },
  n3: { ru: '500+ млн', en: '500+ million', hy: '500+ մլն' }, n3p: { ru: 'экземпляров манги One Piece: рекорд Гиннесса для одной серии одного автора', en: 'copies of the One Piece manga: a Guinness record for one series by a single author', hy: 'One Piece մանգայի օրինակներ. Գինեսի ռեկորդ մեկ հեղինակի մեկ շարքի համար' },
  src: { ru: 'Источники: Association of Japanese Animations (данные за 2023), Guinness World Records, Academy of Motion Picture Arts and Sciences.', en: 'Sources: Association of Japanese Animations (2023 data), Guinness World Records, Academy of Motion Picture Arts and Sciences.', hy: 'Աղբյուրներ. Association of Japanese Animations (2023 թ. տվյալներ), Guinness World Records, Academy of Motion Picture Arts and Sciences։' },
  s4k: { ru: 'Глава 4', en: 'Chapter 4', hy: 'Գլուխ 4' }, s4h: { ru: 'Почему оно значит так много', en: 'Why it means so much', hy: 'Ինչու է այն այդքան կարևոր' },
  w1h: { ru: 'Истории о нас', en: 'Stories about us', hy: 'Պատմություններ մեր մասին' }, w1p: { ru: 'Взросление, дружба, страх неудачи и упорство: темы понятны в любой стране, поэтому герои из Японии становятся «своими» для людей по всему миру.', en: 'Growing up, friendship, fear of failure and perseverance: themes that make sense in any country, so heroes from Japan become “ours” for people everywhere.', hy: 'Մեծանալ, բարեկամություն, անհաջողության վախ և հաստատակամություն. թեմաներ, որոնք հասկանալի են ցանկացած երկրում, դրա համար ճապոնական հերոսները դառնում են «մերը» աշխարհի ամեն տեղ։' },
  w2h: { ru: 'Сообщество', en: 'A community', hy: 'Համայնք' }, w2p: { ru: 'Фестивали, косплей, обсуждения серий и коллекции: любовь к аниме объединяет людей. В Ереване такие встречи проходят на аниме-фестах, и Anime Otaku участвует в них.', en: 'Festivals, cosplay, episode discussions and collections: love of anime brings people together. In Yerevan such meetups happen at anime fests, and Anime Otaku takes part.', hy: 'Փառատոներ, կոսփլեյ, սերիաների քննարկումներ և հավաքածուներ. անիմեի սերը մարդկանց միավորում է։ Երևանում նման հանդիպումները տեղի են ունենում անիմե փառատոներում, և Anime Otaku-ն մասնակցում է դրանց։' },
  w3h: { ru: 'Искусство, которое можно взять в руки', en: 'Art you can hold', hy: 'Արվեստ, որը կարելի է բռնել ձեռքում' }, w3p: { ru: 'Любимого героя хочется оставить рядом: фигурка на полке, футболка с принтом, том манги. Именно за этим люди идут в магазин.', en: 'You want to keep a favourite hero close: a figure on the shelf, a printed T-shirt, a manga volume. That is why people come to the shop.', hy: 'Սիրած հերոսին ուզում ես թողնել քո կողքին. արձանիկ դարակին, տպագրությամբ շապիկ, մանգայի հատոր։ Հենց դրա համար են մարդիկ գալիս խանութ։' },
  s5k: { ru: 'Глава 5', en: 'Chapter 5', hy: 'Գլուխ 5' }, s5h: { ru: 'Anime Otaku: первый аниме-магазин в Ереване', en: 'Anime Otaku: the first anime shop in Yerevan', hy: 'Anime Otaku. առաջին անիմե խանութը Երևանում' },
  s5p: { ru: 'Фигурки, одежда, манга, стикеры и подарки для тех, кто любит аниме. Заходите на Спендиаряна, 5: продавцы подскажут, с чего начать коллекцию, и помогут выбрать подарок.', en: 'Figures, apparel, manga, stickers and gifts for anime fans. Drop in at 5 Spendiaryan St.: the staff will help you start a collection or choose a gift.', hy: 'Արձանիկներ, հագուստ, մանգա, ստիկերներ և նվերներ անիմեի սիրահարների համար։ Այցելեք Սպենդիարյան 5. վաճառողները կօգնեն սկսել հավաքածուն կամ ընտրել նվեր։' },
  // shop
  featured: { ru: 'Из магазина', en: 'From the shop', hy: 'Խանութից' }, chooseSection: { ru: 'Разделы', en: 'Categories', hy: 'Բաժիններ' }, seeAll: { ru: 'Смотреть все', en: 'See all', hy: 'Տեսնել բոլորը' },
  back: { ru: 'Назад', en: 'Back', hy: 'Հետ' }, fwd: { ru: 'Вперёд', en: 'Next', hy: 'Առաջ' }, toBag: { ru: 'В корзину', en: 'Add to cart', hy: 'Զամբյուղ' }, toFav: { ru: 'В избранное', en: 'Add to favourites', hy: 'Ընտրյալներ' },
  priceAsk: { ru: 'Цена по запросу', en: 'Price on request', hy: 'Գինը՝ ըստ հարցման' }, priceNote: { ru: 'Магазин не публикует цены: назовём в ответе на ваше сообщение.', en: 'The shop does not publish prices: we will give you the price in reply to your message.', hy: 'Խանութը գները չի հրապարակում. կհայտնենք ձեր հաղորդագրությանը պատասխանելիս։' },
  showFilters: { ru: 'Показать фильтры', en: 'Show filters', hy: 'Ցույց տալ ֆիլտրերը' }, hideFilters: { ru: 'Скрыть фильтры', en: 'Hide filters', hy: 'Թաքցնել ֆիլտրերը' },
  series: { ru: 'Аниме', en: 'Series', hy: 'Անիմե' }, reset: { ru: 'Сбросить фильтры', en: 'Clear filters', hy: 'Մաքրել ֆիլտրերը' },
  empty: { ru: 'Ничего не найдено. Сбросьте фильтры или напишите нам.', en: 'Nothing found. Clear the filters or message us.', hy: 'Ոչինչ չի գտնվել։ Մաքրեք ֆիլտրերը կամ գրեք մեզ։' },
  home: { ru: 'Главная', en: 'Home', hy: 'Գլխավոր' }, addBag: { ru: 'Добавить в корзину', en: 'Add to cart', hy: 'Ավելացնել զամբյուղ' },
  inFav: { ru: 'В избранном ♥', en: 'In favourites ♥', hy: 'Ընտրյալներում ♥' }, addFav: { ru: 'В избранное ♡', en: 'Add to favourites ♡', hy: 'Ընտրյալներ ♡' },
  about: { ru: 'О товаре', en: 'About this product', hy: 'Ապրանքի մասին' }, fCat: { ru: 'Раздел', en: 'Category', hy: 'Բաժին' }, fSeries: { ru: 'Аниме', en: 'Series', hy: 'Անիմե' },
  delivery: { ru: 'Самовывоз и доставка', en: 'Pick-up and delivery', hy: 'Ինքնաբերում և առաքում' },
  deliveryText: { ru: 'Самовывоз из магазина: Ереван, Спендиаряна, 5, ежедневно 12:00–21:00. Доставку и сроки уточняйте у менеджера.', en: 'Pick-up from the shop: 5 Spendiaryan St., Yerevan, daily 12:00–21:00. Ask the manager about delivery and timing.', hy: 'Ինքնաբերում խանութից. Երևան, Սպենդիարյան 5, ամեն օր 12:00–21:00։ Առաքման և ժամկետների մասին հարցրեք մենեջերին։' },
  related: { ru: 'Вам также может понравиться', en: 'You may also like', hy: 'Ձեզ կարող է նաև դուր գալ' },
  favsEmpty: { ru: 'Здесь пока пусто. Нажмите ♡ на карточке, чтобы сохранить товар.', en: 'Nothing here yet. Tap ♡ on a product to save it.', hy: 'Այստեղ դեռ դատարկ է։ Սեղմեք ♡ ապրանքի վրա՝ պահպանելու համար։' },
  toCatalog: { ru: 'Перейти в каталог', en: 'Go to the catalogue', hy: 'Անցնել կատալոգ' }, bagEmpty: { ru: 'В корзине пока ничего нет.', en: 'Your cart is empty.', hy: 'Զամբյուղը դեռ դատարկ է։' },
  total: { ru: 'Итого', en: 'Total', hy: 'Ընդամենը' }, cost: { ru: 'Стоимость', en: 'Cost', hy: 'Արժեքը' }, onRequest: { ru: 'по запросу', en: 'on request', hy: 'ըստ հարցման' },
  oneMsg: { ru: 'Одно сообщение сразу по всем товарам из корзины: цена, наличие и сроки. Писать по каждому товару отдельно не нужно.', en: 'One message for everything in your cart: price, availability and timing. No need to write about each item separately.', hy: 'Մեկ հաղորդագրություն զամբյուղի բոլոր ապրանքների համար՝ գին, առկայություն և ժամկետներ։ Յուրաքանչյուրի համար առանձին գրել պետք չէ։' },
  phName: { ru: 'Ваше имя (необязательно)', en: 'Your name (optional)', hy: 'Ձեր անունը (ըստ ցանկության)' }, phPhone: { ru: 'Телефон (необязательно)', en: 'Phone (optional)', hy: 'Հեռախոս (ըստ ցանկության)' },
  phAddr: { ru: 'Самовывоз или доставка (необязательно)', en: 'Pick-up or delivery (optional)', hy: 'Ինքնաբերում կամ առաքում (ըստ ցանկության)' }, phNote: { ru: 'Комментарий (необязательно)', en: 'Comment (optional)', hy: 'Մեկնաբանություն (ըստ ցանկության)' },
  send: { ru: 'Отправить заказ в WhatsApp', en: 'Send the order on WhatsApp', hy: 'Ուղարկել պատվերը WhatsApp-ով' },
  sendHint: { ru: 'Откроется готовое сообщение: магазин подтвердит наличие, цену и доставку.', en: 'A ready message will open: the shop will confirm availability, price and delivery.', hy: 'Կբացվի պատրաստի հաղորդագրություն. խանութը կհաստատի առկայությունը, գինը և առաքումը։' },
  lessAria: { ru: 'Меньше', en: 'Fewer', hy: 'Պակաս' }, moreAria: { ru: 'Больше', en: 'More', hy: 'Ավելի' }, remove: { ru: 'Удалить', en: 'Remove', hy: 'Հեռացնել' },
  // store
  storeTitle: { ru: 'Магазин в Ереване', en: 'The shop in Yerevan', hy: 'Խանութը Երևանում' }, addr: { ru: 'Ереван, ул. Спендиаряна, 5', en: '5 Spendiaryan St., Yerevan', hy: 'Երևան, Սպենդիարյան 5' },
  hours: { ru: 'Ежедневно 12:00–21:00', en: 'Daily 12:00–21:00', hy: 'Ամեն օր 12:00–21:00' }, rating: { ru: '59 оценок на Яндекс Картах', en: '59 ratings on Yandex Maps', hy: '59 գնահատական Yandex Maps-ում' },
  storeText: { ru: 'Первый аниме-магазин в Ереване: фигурки, одежда, манга, аксессуары и подарки. Покупатели хвалят приветливых продавцов и широкий выбор персонажей.', en: 'The first anime shop in Yerevan: figures, apparel, manga, accessories and gifts. Customers praise the friendly staff and the wide choice of characters.', hy: 'Առաջին անիմե խանութը Երևանում. արձանիկներ, հագուստ, մանգա, աքսեսուարներ և նվերներ։ Գնորդները գովում են բարեհամբույր վաճառողներին և հերոսների լայն ընտրությունը։' },
  f1: { ru: 'Фигурки, одежда, манга, аксессуары', en: 'Figures, apparel, manga, accessories', hy: 'Արձանիկներ, հագուստ, մանգա, աքսեսուարներ' }, f2: { ru: 'Подарки для любителей аниме', en: 'Gifts for anime fans', hy: 'Նվերներ անիմեի սիրահարների համար' },
  f3: { ru: 'Рядом: остановка «Университет им. Брюсова»', en: 'Nearby: “Brusov University” stop', hy: 'Մոտակայքում. «Բրյուսովի համալսարան» կանգառ' },
  route: { ru: 'Построить маршрут', en: 'Get directions', hy: 'Կառուցել երթուղի' }, call: { ru: 'Позвонить', en: 'Call', hy: 'Զանգահարել' },
  hq1: { ru: 'Как сделать заказ', en: 'How to order', hy: 'Ինչպես պատվիրել' },
  ha1: { ru: 'Добавьте товары в корзину и нажмите «Отправить заказ в WhatsApp»: сообщение со всем составом заказа откроется в мессенджере. Менеджер подтвердит наличие, цену и доставку.', en: 'Add products to your cart and press “Send the order on WhatsApp”: a message with your whole order opens in the messenger. The manager will confirm availability, price and delivery.', hy: 'Ավելացրեք ապրանքները զամբյուղ և սեղմեք «Ուղարկել պատվերը WhatsApp-ով». ամբողջ պատվերով հաղորդագրությունը կբացվի մեսենջերում։ Մենեջերը կհաստատի առկայությունը, գինը և առաքումը։' },
  hq4: { ru: 'Связаться', en: 'Contact us', hy: 'Կապ' }, notFound: { ru: 'Страница не найдена', en: 'Page not found', hy: 'Էջը չի գտնվել' }, toHome: { ru: 'На главную', en: 'Back to home', hy: 'Գլխավոր էջ' },
  fCatalog: { ru: 'Каталог', en: 'Shop', hy: 'Կատալոգ' }, fRoute: { ru: 'Маршрут на Яндекс Картах', en: 'Directions on Yandex Maps', hy: 'Երթուղի Yandex Maps-ում' }, fHelp: { ru: 'Помощь', en: 'Help', hy: 'Օգնություն' },
  fContact: { ru: 'Связаться', en: 'Contact', hy: 'Կապ' }, fDemo: { ru: 'Демонстрационный макет сайта для магазина Anime Otaku, Ереван', en: 'Demonstration mock-up of a website for the Anime Otaku shop, Yerevan', hy: 'Ցուցադրական մակետ Anime Otaku խանութի համար, Երևան' },
  fBy: { ru: 'Сайт: Afonin Web Studio', en: 'Website: Afonin Web Studio', hy: 'Կայք. Afonin Web Studio' },
  popular: { ru: 'Популярные запросы', en: 'Popular searches', hy: 'Հայտնի որոնումներ' }, none: { ru: 'Ничего не найдено. Попробуйте «Naruto» или «футболка».', en: 'Nothing found. Try “Naruto” or “T-shirt”.', hy: 'Ոչինչ չի գտնվել։ Փորձեք «Naruto» կամ «շապիկ»։' },
  tFav: { ru: 'Добавлено в избранное', en: 'Added to favourites', hy: 'Ավելացվեց ընտրյալներում' }, tUnfav: { ru: 'Удалено из избранного', en: 'Removed from favourites', hy: 'Հեռացվեց ընտրյալներից' }, tBag: { ru: 'Добавлено в корзину', en: 'Added to cart', hy: 'Ավելացվեց զամբյուղում' },
  oHead: { ru: 'Здравствуйте! Хочу уточнить цену и наличие по товарам с сайта Anime Otaku:', en: 'Hello! I would like to check the price and availability of these products from the Anime Otaku website:', hy: 'Բարև ձեզ։ Ցանկանում եմ հստակեցնել Anime Otaku կայքի ապրանքների գինը և առկայությունը՝' },
  oAsk: { ru: 'Подскажите, пожалуйста, цену, наличие и сроки по всем позициям.', en: 'Please tell me the price, availability and timing for all items.', hy: 'Խնդրում եմ հայտնեք գինը, առկայությունը և ժամկետները բոլոր դիրքերի համար։' },
  oName: { ru: 'Имя', en: 'Name', hy: 'Անուն' }, oPhone: { ru: 'Телефон', en: 'Phone', hy: 'Հեռախոս' }, oAddr: { ru: 'Самовывоз/доставка', en: 'Pick-up/delivery', hy: 'Ինքնաբերում/առաքում' }, oNote: { ru: 'Комментарий', en: 'Comment', hy: 'Մեկնաբանություն' },
};

export let lang = 'ru';
export function initLang() {
  let l = null;
  try { l = localStorage.getItem('otaku-lang'); } catch { /* ignore */ }
  if (!LANGS.includes(l)) { const n = (navigator.language || 'ru').slice(0, 2); l = LANGS.includes(n) ? n : 'ru'; }
  setLang(l, false);
}
export function setLang(l, save = true) {
  lang = l; document.documentElement.lang = l;
  if (save) { try { localStorage.setItem('otaku-lang', l); } catch { /* ignore */ } }
}
export const t = (key) => (S[key] ? S[key][lang] : key);
export const tt = (map, key) => (map[key] ? map[key][lang] : key);
