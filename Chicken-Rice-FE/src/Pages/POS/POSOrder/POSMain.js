import React, { useState } from 'react';
import Common from '../../../Components/Common/POSCommon/Common';
import { getProduct } from '../../../utility/product/product';
import BASEURL from '../../../Config/Config';
import './POSDetail.css';
import { useEffect } from 'react';
import { getCategories } from '../../../utility/categories/category';
import LeftPane from './leftpane';
export default function POSMain(){
     const [category, setCategory] =useState('All Dishes')
     const [showCategoryList , setShowCategoryList] = useState(false)
     const [product,setProduct] =useState([])
     const [showProduct ,setShowProduct] = useState([])

     const [categories ,setCategories] = useState([])


     console.log(product)

       const handleCategoryClick = (category) =>{
        alert(category)
           setCategory(category)
           setShowCategoryList(false)
       }
    
       const handleProductClick = (product) => {
        setShowProduct((prevProducts) => {
          const existingProductIndex = prevProducts.findIndex((p) => p._id === product._id);
      
          if (existingProductIndex !== -1) {
            const updatedProducts = [...prevProducts];
            updatedProducts[existingProductIndex].quantity += 1;
            return updatedProducts;
          } else {
            return [...prevProducts, { ...product, quantity: 1 }];
          }
        });
      };
      

       async function getAllProduct(){
          let res = await  getProduct()
          if(res.status === 200) setProduct(res.data.product)
          else setProduct([])
       }
  
       async function getAllCategory(){
        let res = await getCategories()
        if(res.status === 200) setCategories(res.data.categories)
        else setCategories([])
       }
    
       useEffect(()=>{
          getAllProduct()
          getAllCategory()
       },[])
       const filteredProducts = category === 'All Dishes'? product: product.filter((product) => product.category.name === category);
      console.log('filteredProducts',filteredProducts)


    return (
        <div id="content" >
         <Common/>
            <div className="container-fluid pos">
                <div className="pos-content">
                    <div className="window">
                        <div className="subwindow">
                            <div className="subwindow-container">
                                <div className="subwindow-container-fix screens">
                                    <div className="product-screen screen">
                                        <div className="screen-full-width row">
                                                                                         
                                    <LeftPane   showProduct={showProduct} />

                                            <div className="rightpane ">
            <div className="products-widget">
                <div className="products-widget-control">
                    <div className="rightpane-header" >
                        <div className="search-bar-container sb-product">
                            <div className="pos-search-bar">
                                <i className="fa fa-search"></i>
                                <input placeholder="Search Products..." type="text" />
                            </div>
                        </div>
                        <div className="categories-header">
                            <div className="breadcrumb">
                                <span className="breadcrumb-button">Select Category:</span>
                                <span className="breadcrumb-button category" id="selected-category" onClick={()=> setShowCategoryList(true)}  >
                                   {category}
                                </span>
                                <i className="breadcrumb-arrow fa fa-caret-down" aria-hidden="true"></i>
                                    {showCategoryList && (               
                                  <span>                 
                                      {categories.map((category) => (

              <span
                key={category}
                className="breadcrumb-button"
                 onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </span>
            ))}
                      </span>    
                          ) }             
                                      
                                      {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-list-container">
                    <div className="grid product-list">

                      {filteredProducts.map((item)=>(  
                        <article tabIndex="0" className="product grid" data-product-id="24" aria-labelledby="article_product_24"   onClick={() => handleProductClick(item )}
                        >
                            <div className="product-img">
                               
                                <img src={BASEURL+"/files/"+item.file} />

                            </div>

                             <div className="product-content">
                                <div className="product-name" id="article_product_24">
                                    {item.productName}
                                </div>
                                <span className="price-tag">${item.defaultPrice}</span>
                            </div>
                        </article>
                         ))}
                    </div>
                    <div className="portal search-database-button no-results-message oe_hidden"></div>
                </div>
            </div>
        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

