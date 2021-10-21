//  Sukurti komponentus ItemCard ir ItemCardContainer. Sukurti tokį atvaizdavimą: 'task-2.png' 
const root = document.querySelector('#root');

const itemContainerComponent = new ItemContainerComponent({
  items: [
    new ItemComponent({
      imgSrc: 'https://m.media-amazon.com/images/I/61JR+d77yyS._AC_UL320_.jpg',
      desc: 'Aprašymas',
      price: {
        currency: {
          name: 'USD',
          sign: '$',
        },
        value: 10.99
      }
    }),
    new ItemComponent({
      desc: 'Aprašymas',
      price: {
        currency: {
          name: 'USD',
          sign: '$',
        },
        min: 25.9999999,
        max: 200
      }
    }),
    new ItemComponent({      
      desc: 'Apas daug žodžių Aprašymas da žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių',
    }),
    new ItemComponent({
      imgSrc: 'https://m.media-amazon.com/images/I/61e0NrjY0WL._AC_UL320_.jpg',
      desc: 'Aprašymas',
    }),
    new ItemComponent({
      desc: 'Aprašymas daug žodžių Aprašymas da žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių',

    }),
    new ItemComponent({
      desc: 'Aprašymas',
    }),
    new ItemComponent({
      imgSrc: 'https://m.media-amazon.com/images/I/711TbIZxM9L._AC_UL320_.jpg',
      desc: 'Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių Aprašymas daug žodžių',
    }),
    new ItemComponent({
      desc: 'Aprašymas',
    }),
  ]
});

root.append(itemContainerComponent.htmlElement);

