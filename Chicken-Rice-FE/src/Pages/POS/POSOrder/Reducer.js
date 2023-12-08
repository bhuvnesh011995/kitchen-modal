import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = [];


const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingCartItemIndex = state.findIndex((cartItem) => cartItem.productId === action.payload._id); 
      if (existingCartItemIndex !== -1) {
        const updatedCart = state.map((item, index) => {
          if (index === existingCartItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,

            };
          }
          return item;
        });
    
        return updatedCart;
      } else {
        return [
          ...state,
          {
            productId: action.payload._id,
            recipeName: action.payload.recipeName,
            price: action.payload.defaultPrice,
            quantity: 1,
          },
        ];
      }

      case 'increaseQuentity':
        return state.map((item) =>
          item.productId === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        case 'decreaseQuentity':
          return state.map((item) =>
            item.productId === action.payload
              ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
              : item
          ).filter((item) => item.quantity > 0);    
       
      case 'REMOVE_FROM_CART':
        
      return state.filter((item) => item.productId  !== action.payload);


      case 'UPDATE_CART_ITEM_QUANTITY':
        console.log('quentity',action.payload)
        const { productId, quantity, totalPrice } = action.payload;
        const updatedShoppingCart = state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: quantity ,totalPrice: totalPrice }; 
          }
          return item;
        });
        console.log('updatedShoppingCart',updatedShoppingCart)
        return updatedShoppingCart;

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
