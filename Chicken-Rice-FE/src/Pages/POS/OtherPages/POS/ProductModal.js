import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BASEURL from '../../../../Config/Config';
function ProductModal({product, show,setShow ,addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState(null);
    const [selectedOptionData, setSelectedOptionData] = useState(null);

    console.log("ddddddd",selectedOptionData)
    console.log("nPRODUCTSSS",product)
  const sizeOptions = [
    { label: 'Small', price: '+0.00' },
    { label: 'Large', price: '+3.00' },
    { label: 'Medium', price: '+1.50' },
  ];

  const addOnOptions = [
    { label: 'More BBQ sos', price: '+0.00' },
    { label: 'Extra french', price: '+1.00' },
    { label: 'Extra french', price: '+1.00' },
  ];

  const handleQuantityChange = (value) => {
    const currentQuantity = quantity;
    const newQuantity = Math.min(product.ingradients[0].quantity, Math.max(1, currentQuantity + value));
    setQuantity(newQuantity);
  };
    const handleOptionClick = (index) => {
    if (selectedSize === index) {
      setSelectedSize(null);
      setSelectedOptionData(null);
    } else {
      setSelectedSize(index);
      setSelectedOptionData(sizeOptions[index]);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity,selectedOptionData);
    setShow(false)
  };

  const handleCancle = () => {
    setShow(false)
  };


  useEffect(() => {
    console.log("bjbjk", product);
  }, []);
  if (!product || product.ingradients[0].quantity === 0) {
    return null; 
  }


return(
  <Modal  show={show} onHide={() => setShow(false)} size="lg">
  <Modal.Body style={{ maxWidth: '90vw', overflowX: 'auto' }}>
 
      <div className="modal-pos-product">
        <div className="row">
        <div className="col-md-6">
  <div className="modal-pos-product-img m-2">
  <img
              alt={"photo"}
              height={'50%'}
              src={BASEURL+"/files/"+product.photo}
              loading="photo"
              width={"100%"}
            />   </div>
</div>
          <div className="col-md-6">
            <div className="modal-pos-product-info ">
              <div className="fs-4 fw-semibold">{product.name}</div>
              <div className="text-body text-opacity-50 mb-2">
               {product.description}
              </div>
              <div className="fs-3 fw-bold mb-3">{product.price}</div>
              <div className="d-flex mb-3">
    <a href="#" className="btn btn-secondary btn-sm quantity__minus" onClick={(e) => { e.preventDefault(); handleQuantityChange(-1); }}>
      <i className="fa fa-minus"></i>
    </a>
    <input
      type="number"
      className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 text-center quantity__input"
      value={quantity}
      name="quantity"
    />
    <a href="#" className="btn btn-secondary btn-sm quantity__plus" onClick={(e) => { e.preventDefault(); handleQuantityChange(1); }}>
      <i className="fa fa-plus"></i>
    </a>
  </div>
              <hr className="opacity-1" />
              <div className="mb-2">
  <div className="fw-bold m-2">Size:</div>
  <div className="row ">
    {sizeOptions.map((option, index) => (
      <div key={index} className="col-md-4 col-sm-4 col-12">
        <div className="option" style={{border: selectedSize === index ? '2px solid grey' : '1px solid grey', textAlign: 'center', borderRadius: '8px' }} 
       onClick={() => handleOptionClick(index)}
  >
          <label className="option-label" htmlFor={`size${index}`}>
            <span className="text-body text-opacity-50 mb-2" style={{ fontSize: '80%' }}>{option.label}</span>
            <div className="option-price">{option.price}</div>
          </label>
        </div>
      </div>
    ))}
  </div>

  <div className="fw-bold  m-2">Add On:</div>
  <div className="row ">
    {addOnOptions.map((option, index) => (
      <div key={index} className="col-md-4 col-sm-4 col-12">
                <div className="option" style={{border: selectedSizes === index ? '2px solid grey' : '1px solid grey', textAlign: 'center', borderRadius: '8px'}}  onClick={() => setSelectedSizes(index)}>
          <label className="option-label" htmlFor={`addon${index}`}>
            <span className="text-body text-opacity-50 mb-2" style={{ fontSize: '80%' }}>{option.label}</span>
            <div className="option-price">{option.price}</div>
          </label>
        </div>
      </div>
  ))} 
    </div>
</div>
              <hr className="opacity-1" />
              <div className="row">
                <div className="col-4">
                  <div className="btn btn-default fw-semibold mb-0 d-block py-3" data-bs-dismiss="modal"    onClick={handleCancle}>
                    Cancel
                  </div>
                </div>
                <div className="col-8">
                  <div className="btn btn-theme fw-semibold d-flex justify-content-center align-items-center py-3 m-0" onClick={handleAddToCart}>
                    Add to cart <i className="fa fa-plus ms-2 my-n3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </Modal.Body>
  </Modal>
)
};


export default ProductModal;
