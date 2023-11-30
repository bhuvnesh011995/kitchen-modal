import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = [];

const calculateItemTotal = (item) => {
  return item.quantity * item.totalPrice;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];


      case 'UPDATE_QUANTITY':
      const { productId, quantity } = action.payload;
      const updatedShoppingCart = state.map(item => {
        if (item.productId === productId) {
          const updatedItem = { ...item, quantity };
          updatedItem.total = calculateItemTotal(updatedItem);
          return updatedItem;
        }
        return item;
      });
      return updatedShoppingCart;

    
      // case 'UPDATE_SHOPPING_CART_QUANTITY':
      //   const updatedShoppingCart = state.shoppingCart.map((item) => {
      //     if (item.productId === action.payload.productId) {
      //       return {
      //         ...item,
      //         quantity: action.payload.quantity,
      //       };
      //     }
      //     return item;
      //   });
      //   console.log('Updated Shopping Cart:', updatedShoppingCart);

      //   return {
      //     ...state,
      //     shoppingCart: updatedShoppingCart,

      //   };
 
        
      
    // case 'UPDATE_CART_ITEM_QUANTITY':
    //   console.log('removedProductId', action.payload )

    //   const { productId, newQuantity } = action.payload;
    //   const updatedCart = state.map(item =>
    //     item.productId === productId ? { ...item, quantity: newQuantity } : item
    //   );
    //   console.log('updatedCart',updatedCart )
           
    //   return updatedCart;

    case 'UPDATE_CART':
      return [...action.payload];

  
        


    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [shoppingCart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ shoppingCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
