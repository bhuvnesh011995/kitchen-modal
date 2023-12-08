import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './POSCheckOut.css';
import Navbar from '../../../Components/Common/Navbar';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../../utility/categories/category';
import { useEffect } from 'react';
import BASEURL from '../../../Config/Config';
import { getProduct } from '../../../utility/product/product';


export default function POSCheckOut() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState('');

  async function getAllCategory() {
    let res = await getCategories();
    if (res.status === 200) setCategories(res.data.categories);
    else setCategories([]);
  }

  async function getAllProduct() {
    let res = await getProduct();
    if (res.status === 200) setProduct(res.data.product);
    else setProduct([]);
  }

  console.log('categorys', product);

  useEffect(() => {
    getAllCategory();
    getAllProduct();
  }, []);

  const handleCategoryClick = (clickedCategory) => {
    setCategory(clickedCategory === category ? '' : clickedCategory);
  };

  const filteredProducts = category
    ? product.filter((item) => item.category.name === category)
    : product;

  console.log('filteredProducts', filteredProducts);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div class="text-left">
        <ul class="menu-list ">
          <li>
            <a style={{height:'50px'}}
              className={`btn btn-default filter-button ${!category && 'active'}`}
              onClick={() => handleCategoryClick('')}
            >
              <span style={{ verticalAlign: 'middle' }}>All</span>
            </a>
          </li>

          {categories.map((item) => (
            <li key={item.item}>
              <a
                className={`btn btn-default filter-button ${category === item.name && 'active'}`}
                onClick={() => handleCategoryClick(item.name)}
              >
                <img
                  src={BASEURL + '/files/' + item.photo}
                  alt=""
                  className="imgfluid"
                />
                <span style={{ verticalAlign: 'middle' }}>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="row " style={{ marginTop: '1%', backgroundColor: '#fff' }}>
        <div className="col-md-12 menu-dishes ">
          {filteredProducts.map((item) => (
            <div
              className="row no-gutters filter chicken "
              onClick={() => navigate('/addonpos', { state: { item } })}            >
              <div className="col-4 col-sm-4 ">
                <div className="menu-img">
                  <img
                    src={BASEURL + '/files/' + item.file}
                    alt=""
                    className="imgfluid img-thumbnail"
                    style={{ padding: 0 }}
                  />
                </div>
              </div>
              <div className="col-8 col-sm-8 add-on">
                <div className="menu-item-description">
                  <h4>{item.recipeName}</h4>
                  <p>{item.description}</p>
                  <h5>${item.defaultPrice}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    <div className='row ' style={{marginTop:'1%',backgroundColor:'#fff'}}>
                <div style={{position:"relative",zIndex:"99999",borderRadius:'8%'}}>
                <div style={{ position: "fixed", top: "91%", left: "25%", width: '50%', transform: 'translateY(-50%)', backgroundColor: '#800', height: '55px', borderRadius: '15px' }}  >
  <span style={{ display: 'flex', alignItems: 'center', height: '100%',}} onClick={() => navigate('/check', { state: { product } })}
>
    <span style={{  flex: 1,marginLeft:'2%',color:'#fff' }}>
   
   <ShoppingCartIcon/>
     CheckOut
    </span>
    <span style={{color:'#fff',marginRight:'12px'}} >
      0.000
    </span>
  </span>
</div>


                </div>
    </div>
    </div>

  );
}
