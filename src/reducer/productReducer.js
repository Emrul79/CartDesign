const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.cart.find((p) => p.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((p) =>
            p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "DECREMENT_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((p) =>
          p.id === action.payload.id ? { ...p, quantity: p.quantity - 1 } : p
        ),
      };
    }
    case "INCREMENT_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((p) =>
          p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
export { initialState, productReducer };
