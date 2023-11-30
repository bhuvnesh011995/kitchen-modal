import React from 'react';
import { useCart } from './Reducer';

const PlusMinusComponent = (props) => {
  const { shoppingCart,dispatch} = useCart({});


  const { quantity, onChange } = props;
   
  console.log('quantity',quantity)
  const handlePlusClick = () => {
    onChange(quantity + 1);
  };

  const handleMinusClick = () => {
  if(quantity > 1)
  {
    onChange(quantity - 1);
  }
  else{
    const filterProducts = shoppingCart.filter(Cart=>Cart.productId !=  props.productId)
    dispatch({ type: 'UPDATE_CART', payload: filterProducts });
console.log('quentityPopsspro',props.productId)

  }
  };

  

  return (
    <div className="col-md-4 d-flex justify-content-end align-items-center">
      <a className="btn btn-secondary btn-sm quantity__minus" onClick={handleMinusClick}>
        <i className="fa fa-minus"></i>
      </a>
      <input
        type="number"
        className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 text-center quantity__input"
        value={quantity}
        name="quantity"
        onChange={(e) => console.log('Input value changed:', e.target.value)}  // This is optional, depending on your requirements

        readOnly
      />
      <a className="btn btn-secondary btn-sm quantity__plus" onClick={handlePlusClick}>
        <i className="fa fa-plus"></i>
      </a>
    </div>
  );
};

export default PlusMinusComponent;
