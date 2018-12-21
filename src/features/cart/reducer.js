const initialState = {
  cart : []
}

const cartReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        cart: [state.cart, action.payload]
      }

      case 'REMOVE':
        const firstMatchIndex = state.indexOf(action.payload)
        return state.filter((item, index) => index !== firstMatchIndex)

      default:
        return state;
  }
}

export default cartReducer;
