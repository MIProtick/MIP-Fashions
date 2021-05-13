const InitiaState = {
  sections: [
    {
      'id': 1,
      'imgUrl': '/_images/hat.jpg',
      'title': 'Hats',
      'size': '',
      'link': 'shop/hats',
    },
    {
      'id': 2,
      'imgUrl': '/_images/jackets.jpg',
      'title': 'Jackets',
      'size': '',
      'link': 'shop/jackets',
    },
    {
      'id': 3,
      'imgUrl': '/_images/sneakers.jpeg',
      'title': 'Sneakers',
      'size': '',
      'link': 'shop/sneakers',
    },
    {
      'id': 4,
      'imgUrl': '/_images/men.jpeg',
      'title': 'Men',
      'size': 'large',
      'link': 'shop/men',
    },
    {
      'id': 5,
      'imgUrl': '/_images/women.jpeg',
      'title': 'Women',
      'size': 'large',
      'link': 'shop/women',
    },
  ],
}

const directoryReducer = (state = InitiaState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;