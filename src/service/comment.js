import { getRangeNumbers, arrayCopy, detachFromArray, selectFromArray, getRandomNum, getObjects } from '../utils.js';

export const comments = [
  'Во-первых, это смело. Достаточно взглянуть на&nbsp;негативные рецензии, чтобы понять почему это смело.',
  'Этот мультфильм чем-то напоминает строительную рекламу из&nbsp;2000-х гг&nbsp;про всевозможные суперклеи, хотя, казалось&nbsp;бы, сюжет посвящён животным, которые на&nbsp;время ремонта зоопарка переселились в&nbsp;жилые квартиры.',
  'Фильм вскрывает отношения, которые требуют коррекции, требуют осознания того, что мы&nbsp;делаем.',
  'Слезы шли почти весь фильм. Мое понимание психолога о&nbsp;ситуации. Я&nbsp;вижу это на&nbsp;консультациях, а&nbsp;вы&nbsp;можете увидеть на&nbsp;это на&nbsp;экране. Есть возможность, пока дети рядом.',
  'Как&nbsp;бы ни&nbsp;относиться к&nbsp;этому фильму, он&nbsp;стал эпохальным событием ещё задолго до&nbsp;своего выхода. Обделить его вниманием было&nbsp;бы нечестно, притом что я&nbsp;очень стараюсь писать не&nbsp;для себя. Наберусь смелости попробовать в&nbsp;этот раз быть объективным и&nbsp;начну с&nbsp;критики.',
  'Собственно, в&nbsp;заголовок вынесена суть. Если&nbsp;бы за&nbsp;вход в&nbsp;зал, где крутят этот мультфильм доплачивали зрителю, то&nbsp;тогда есть смысл взять деньги, зайти, воткнуть наушники и&nbsp;посмотреть на&nbsp;телефоне что-то другое.',
  'Короткий мультфильм о&nbsp;непослушной девочке Маше, которая никак не&nbsp;может уснуть ночью и&nbsp;от&nbsp;этого у&nbsp;неё плохое настроение. Добавляя в&nbsp;сюжет элементы комедии, мультфильм рассказывает младшим зрителям о&nbsp;том, как спят те&nbsp;или иные животные.',
  'Случайно увидев данный сериал на&nbsp;платформе Apple Tv&nbsp;решил посмотреть трейлер. Стало интересно, что&nbsp;же такого можно снять про мир дорого коллекционного вина. Трейлер мне сразу понравился, красивая картинка, интересные локации. Пусть завязка не&nbsp;самая оригинальная, но&nbsp;хуже она от&nbsp;этого не&nbsp;становится.',
  'Одной из&nbsp;ключевых особенностей фильма является его способность моментально устанавливать настроение. Это достигается благодаря великолепной работе оператора Аарона Мортона, который создает мрачную атмосферу при помощи холодных и&nbsp;темных тонов. С&nbsp;самого начала зритель погружается в&nbsp;мир ужаса и&nbsp;напряжения, которые будут сопровождать его на&nbsp;протяжении всего просмотра.',
  'Защитить пассажиров&nbsp;&mdash; сколько голливудского лоска скрыто за&nbsp;этой фразой, и&nbsp;столько&nbsp;же трупов будет. Ещё мне фильм понравился тем, что превозносит Джерарда Батлера в&nbsp;звезду боевиков 2010-х годов. Как когда-то ими были Сталлоне и&nbsp;Шварценеггер.',
  'Актёрский состав мне понравился. Дети играли хорошо, а&nbsp;блистательный Итан Хоук... К&nbsp;сожалению, ему тут играть нечего. Да, его голос потрясающий, и&nbsp;маска у&nbsp;него интересная, но&nbsp;как маньяк он&nbsp;непритягательный. Он&nbsp;не&nbsp;пугает, он&nbsp;не&nbsp;мерзкий, он&nbsp;не&nbsp;вызывает симпатию. Он&nbsp;пустой. Смотришь на&nbsp;него и&nbsp;никаких эмоций.',
  'Музыкальное сопровождение, одно из самых главных элементов хоррора здесь тухлое. Не заставляет сопереживать главным героям, не заставляет опасаться маньяка, не даёт эмоциональных настроек на сцену… кроме одного момента. Концовка. Такого дешёвого метода вызвать сопереживания я не видел давно. Кто смотрел фильм, думаю меня поймёт.',
  'Для меня это посредственный фильм. Он&nbsp;блеклый и&nbsp;пустой. Он&nbsp;продвигает крайне сомнительные идеи, не&nbsp;вызывает эмоций и&nbsp;смотрится вторично. Из&nbsp;плюсов тут только Итан Хоук и&nbsp;главные герои',
  'С&nbsp;первых мгновений фильма есть чувство парадоксального. Слепой белый песок в&nbsp;сухих скальных позвонках чужой планеты. Гортанное пение-хрип вдалеке. Щелчок выключателя на&nbsp;тёплой стене с&nbsp;бежевыми обоями, светло-жёлтыми дверями в&nbsp;квартире со&nbsp;светлым паркетом. Задиристая &laquo;Песня одесситки&raquo; из&nbsp;ф.&nbsp;1942&nbsp;г. &laquo;Котовский&raquo;.',
  'Герой Любшина шагает к&nbsp;гастроному. Проспект вечереет. Городской холод, изумрудно-зелёное освещение лестничных обширных пролётов институтов/учреждений. В&nbsp;витрине массивного здания гастронома видим плакат с&nbsp;красивой женской головкой в&nbsp;голубой чалме',
  'Вообще-то идею для фильма Г.&nbsp;Данелии и&nbsp;сценаристу Р.&nbsp;Габриадзе&nbsp;&mdash; подкинул писатель и&nbsp;сценарист итальянец Тонино Гуэрра. Сказал, что в&nbsp;России такие холодные длинные зимы, создайте согревающий фильм-сказку. Изначально Г. Данелия хотел снимать что-то типа &laquo;Остров сокровищ&raquo;.',
  'Думаю, что &laquo;красоту&raquo; индустриально оголённых пейзажей, вероятно, мог насоветовать Тонино Гуэрра, который описывал подобное и&nbsp;в&nbsp;своих рассказах, и&nbsp;в&nbsp;сценариях (типа&nbsp;ф. &laquo;Красная пустыня&raquo; реж. Антониони)',
  'Очень понравилось, что и&nbsp;в&nbsp;сценарии и&nbsp;в&nbsp;фильме, Любшин с&nbsp;Гедеваном атаковали &laquo;высших по&nbsp;тентуре&raquo; альфиян плюканскими способами: Гедеван пел-тянул &laquo;Ы-ы-ы!&raquo;, рвал цветы и&nbsp;угрожал, что&quot; засушит и&nbsp;выкурит&quot;, возмущался в&nbsp;шумной манере, и&nbsp;снимал респиратор. Они с&nbsp;Любшиным по&nbsp;сценарию к&nbsp;моменту прыжка на&nbsp;Альфу чуток захмелели после чачи.',
  'Популистские фразы критиков, что фильм был &laquo;завуалирован, символами, обличал советскую действительность, и&nbsp;т.&nbsp;д.&raquo;, уже в&nbsp;тупике. Есть трескуче слетевший с&nbsp;катушек персонаж &laquo;папаша Кырр&raquo; (который угрожал транклюкатором). Любшин про себя назвал его Пирожок, из-за физии у&nbsp;того, мятой как привокзальный пирожок. Так вот Гедеван ругнулся на&nbsp;Кырра-пирржка: &laquo;мерзавец, расист&raquo;.',
  'Считаю фильм&nbsp;&mdash; удачей режиссёра по&nbsp;воплощению собственных литературных образов. А&nbsp;также &laquo;захватом&raquo;, коллекционированием энергетик живых актёров и&nbsp;вещей, сопровождавших киноработу.',
  'Этот мультфильм убедил меня в&nbsp;том, что в&nbsp;Советском Союзе жанр фэнтези существовал и&nbsp;экранировался ещё в&nbsp;начале 1980-х гг. &laquo;Сын камня&raquo; основан на&nbsp;эпосе народов Кавказа и&nbsp;показывает нам такие красочные сражения и&nbsp;такого внушительного демона, что все советские киножериссёры, вероятно, нервно мигали в&nbsp;сторонке.',
  'О&nbsp;&laquo;Чёрном телефоне&raquo; я&nbsp;узнал совершенно случайно. Небольшой отрывок фильма выдали мне в&nbsp;рекомендациях на&nbsp;одном видеохостинге. Меня заинтересовал этот фильм, но&nbsp;до&nbsp;просмотра я&nbsp;так и&nbsp;не&nbsp;дошёл, и&nbsp;отложил его в&nbsp;долгий ящик. Спустя время я&nbsp;вернулся к&nbsp;этому фильму и&nbsp;разочаровался.',
  'Я&nbsp;слышал, что Скотт Дерриксон специализируется на&nbsp;хоррорах, но&nbsp;конкретно этот фильм оказался посредственным. Может и&nbsp;хорошо, что он&nbsp;так и&nbsp;не&nbsp;снял второго &laquo;Доктора Стрэнджа&raquo;',
  'Фильм позиционируется как очередная картина о&nbsp;маньяке, который похищает детей. При этом, за&nbsp;всю ленту зрителю не&nbsp;пояснят зачем он&nbsp;это делает. Вас ожидает обыкновенная история, которую можно уместить в&nbsp;хороший короткий метр.',
  'Вся картина пронизана религиозным подтекстом и&nbsp;лично для меня это явный минус, но&nbsp;не&nbsp;из-за самого присутствия оного, а&nbsp;из-за того, как это используется. И&nbsp;то, как картина закончилась, меня крайне смутило',
  'Из&nbsp;главного фантастического элемента сочится идея мести, однако это ладно скроенный план, который опять явственно привязан религиозным подтекстом.'
];

const authors = [
  'Сафонов Дамир Матвеевич',
  'Иванов Василий Александрович',
  'Ткачева Ева Даниловна',
  'Яковлев Даниил Максимович',
  'Позднякова Екатерина Никитична',
  'Емельянов Кирилл Савельевич',
  'Журавлев Артём Евгеньевич',
  'Авдеева Алина Данииловна',
  'Михайлов Александр Макарович',
  'Тарасов Леонид Тимофеевич',
  'Федотова София Александровна',
  'Исаев Константин Данилович',
  'Виноградов Даниил Романович',
  'Анисимова Полина Данииловна',
  'Крылов Давид Дмитриевич',
  'Харитонов Михаил Андреевич',
  'Бирюкова Кира Даниэльевна',
  'Кузнецов Филипп Платонович',
  'Киселев Эмир Сергеевич',
  'Сидоров Максим Михайлович',
  'Нечаев Александр Давидович',
  'Грачева Алеся Кирилловна',
  'Кулагин Даниил Максимович',
  'Лукьянов Алексей Семёнович',
  'Егорова Стефания Егоровна',
  'Черепанов Тимур Всеволодович',
  'Вдовина Евгения Данииловна',
  'Кузнецова Аделина Дмитриевна',
  'Чернышева Арина Фёдоровна',
  'Ильина Дарья Антоновна'];

  const emotions = ['smile', 'sleeping', 'puke', 'angry'];

console.log(selectFromArray(comments));
console.log(selectFromArray(authors));
console.log(selectFromArray(emotions));




// {
//     'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
//     'emotion': 'smile'
//   }
