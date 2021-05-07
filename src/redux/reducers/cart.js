const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const actualState = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload]
      }

      const arrPizzas = [].concat.apply([], Object.values(actualState));
      const totalPrice = arrPizzas.reduce((sum, obj) => sum + obj.price, 0);

      return {
        ...state,
        items: actualState,
        totalCount: arrPizzas.length,
        totalPrice
      };

    default:
      return state;
  }
};

export default cart;
