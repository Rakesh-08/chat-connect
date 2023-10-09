export const initialState = {
  cart: JSON.parse(localStorage.getItem("cart"))||[]
};

const reducer = (state, action) => {
        
  switch (action.type) {
    case "AddToCart":
      //logic to add an item to the cart
         let temp = {
           ...state,
           cart: [...state.cart, action.payload],
      };
       localStorage.setItem("cart",JSON.stringify(temp.cart))
      return temp

    case "RemoveFromCart":
      //logic to remove an item from the cart
      let newCart = [...state.cart];

      const index = state.cart.findIndex((item) => item.id === action.id);

      if (index >= 0) {
        newCart.splice(index, 1);
      }
      let temp1 = { ...state, cart: newCart };
       localStorage.setItem("cart", JSON.stringify(temp1.cart));
      return temp1; 

  }
};

export default reducer;
