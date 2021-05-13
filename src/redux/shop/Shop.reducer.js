import ShopData from './ShopData';

const InitiaState = {
    collections: ShopData
}

const shopReducer = (state = InitiaState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
  
  export default shopReducer;