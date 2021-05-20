const InitiaState = {
  sections: [
    {
      'id': 1,
      'imgUrl': 'https://i.ibb.co/bHRpMbw/directory-hat.jpg',
      'title': 'Hats',
      'size': '',
      'link': 'shop/hats',
    },
    {
      'id': 2,
      'imgUrl': 'https://i.ibb.co/8sYyQ8Y/directory-jackets.jpg',
      'title': 'Jackets',
      'size': '',
      'link': 'shop/jackets',
    },
    {
      'id': 3,
      'imgUrl': 'https://i.ibb.co/ZWQ5k2m/directory-sneakers.jpg',
      'title': 'Sneakers',
      'size': '',
      'link': 'shop/sneakers',
    },
    {
      'id': 4,
      'imgUrl': 'https://i.ibb.co/RzSzmr5/directory-men.jpg',
      'title': 'Men',
      'size': 'large',
      'link': 'shop/men',
    },
    {
      'id': 5,
      'imgUrl': 'https://i.ibb.co/5G0Qv38/directory-women.jpg',
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