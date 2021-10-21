const itemData = [
  {
    bestSeller: 'In Christmas',
    link: 'https://www.amazon.com/Assorted-Watercolor-Stationary-Notecards-Envelopes/dp/B08HLXGS6N/ref=sr_1_29?dchild=1&keywords=cards&qid=1634753011&sr=8-29',
    imgSrc: 'https://m.media-amazon.com/images/I/816m0Iw-E4L._AC_UL320_.jpg',
    desc: 'Silver and high quality moissanite, which is made to last a lifetime. The earrings post are firmly soldered, which make them strong and durable in daily wearing. These earrings are also skin friendly and they will not hurt your skin',
    rating: {
      link: 'https://www.amazon.com/dp/B09JZFFJM1?th=1',
      stars: {
        1: 22,
        2: 74,
        3: 606,
        4: 102,
        5: 500
      }
    },
    price: {
      currency: {
        name: 'USD',
        sign: '$',
      },
      value: 10.99
    },
    discounts: [
      { type: 'specific', value: 7.99 },
      { type: 'coupon', percent: 5 }
    ],
    shipsToLithuania: true,
    stock: {
      new: 7,
      used: [9.99, 7.99, 8.49]
    },
    ageRestriction: '3 years and up',
  },
  {
    imgSrc: 'https://m.media-amazon.com/images/I/816m0Iw-E4L._AC_UL320_.jpg',
    link: 'https://www.amazon.com/Assorted-Watercolor-Stationary-Notecards-Envelopes/dp/B08HLXGS6N/ref=sr_1_29?dchild=1&keywords=cards&qid=1634753011&sr=8-29',
    desc: 'Silver and high quality moissanite',
    rating: {
      link: 'https://www.amazon.com/dp/B09JZFFJM1?th=1',
      stars: {
        1: 55,
        2: 74,
        3: 206,
        4: 102,
        5: 1144
      }
    },
    price: {
      currency: {
        name: 'USD',
        sign: '$',
      },
      min: 25,
      max: 200
    },
    discounts: [
      { type: 'specific', value: 7.99 },
    ],
    shipsToLithuania: false,
  }
]