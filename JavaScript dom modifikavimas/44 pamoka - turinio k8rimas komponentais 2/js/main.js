//  Sukurti komponentus ItemCard ir ItemCardContainer. Sukurti tokį atvaizdavimą: 'task-2.png' 
const root = document.querySelector('#root');

const itemContainerComponent = new ItemContainerComponent({
  items: [
    new ItemComponent({
      imgSrc: 'https://m.media-amazon.com/images/I/61JR+d77yyS._AC_UL320_.jpg',
      desc: 'Aprašymas',
    }),
    new ItemComponent({
      desc: 'Aprašymas',
    }),
    new ItemComponent(),
    new ItemComponent({
      imgSrc: 'https://m.media-amazon.com/images/I/61e0NrjY0WL._AC_UL320_.jpg',
      desc: 'Aprašymas',
    }),
    new ItemComponent(),
    new ItemComponent(),
    new ItemComponent({
      imgSrc: 'https://m.media-amazon.com/images/I/711TbIZxM9L._AC_UL320_.jpg',
      desc: 'Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių',
    }),
    new ItemComponent(),
  ]
});

root.append(itemContainerComponent.htmlElement);

