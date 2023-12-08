import React, { useState } from 'react';
import salad from "../../../assets/Images/salad.png"
import nonveg2 from "../../../assets/Images/menu-items/nonveg2.jpeg"
import nonveg4 from "../../../assets/Images/menu-items/nonveg4.jpeg"
import veg1 from "../../../assets/Images/menu-items/veg1.jpeg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import nonveg1 from "../../../assets/Images/menu-items/nonveg1.jpeg"
import './POSCheckOut.css';
import { useMediaQuery } from '@mui/material';
import Navbar from '../../../Components/Common/Navbar';
export default function POSCheckOut() {
  const isLargeScreen = useMediaQuery('(min-width: 773px) and (max-width:835px');
  const isMediumScreen = useMediaQuery('(min-width: 500px) and (max-width: 767px)');
  const isSmallScreen = useMediaQuery('(min-width: 246px) and (max-width: 497px)');

  const product = [
    { id: 1, name: 'Chicken', imgUrl: nonveg1 ,dis:'north eastern style hot pot with meats',price:'20'},
    { id: 2, name: 'Beef', imgUrl: veg1 ,dis:'north eastern style hot pot with meats',price:'20'},
    { id: 3, name: 'Chicken', imgUrl: salad ,dis:'north eastern style hot pot with meats',price:'20'},
    { id: 4, name: 'Beef', imgUrl: nonveg2 ,dis:'north eastern style hot pot with meats',price:'20' },
    { id: 5, name: 'Chicken', imgUrl: nonveg2 ,dis:'north eastern style hot pot with meats',price:'20'},
    { id: 6, name: 'Beef', imgUrl: nonveg4 ,dis:'north eastern style hot pot with meats',price:'20' },
    { id: 7, name: 'Chicken', imgUrl: nonveg1 ,dis:'north eastern style hot pot with meats',price:'20'},
    { id: 8, name: 'Beef', imgUrl: nonveg2 ,dis:'north eastern style hot pot with meats',price:'20'},
          
    

    // Add more items as needed
  ];
    
        const jsonData = [
        { id: 1, name: 'Chicken', imgUrl: salad },
        { id: 2, name: 'Beef', imgUrl: salad },
        { id: 3, name: 'Chicken', imgUrl: salad },
        { id: 4, name: 'Beef', imgUrl: nonveg2 },
        { id: 5, name: 'Chicken', imgUrl: nonveg2 },
        { id: 6, name: 'Beef', imgUrl: nonveg2 },
        { id: 7, name: 'Chicken', imgUrl: nonveg2 },
        { id: 8, name: 'Beef', imgUrl: nonveg2 },
                { id: 8, name: 'Beef', imgUrl: nonveg2 },
                { id: 6, name: 'Beef', imgUrl: nonveg2 },
        { id: 7, name: 'Chicken', imgUrl: nonveg2 },
        { id: 8, name: 'Beef', imgUrl: nonveg2 },
                { id: 8, name: 'Beef', imgUrl: nonveg2 },
                { id: 7, name: 'Chicken', imgUrl: nonveg2 },
                { id: 8, name: 'Beef', imgUrl: nonveg2 },
                        { id: 8, name: 'Beef', imgUrl: nonveg2 },
                        { id: 6, name: 'Beef', imgUrl: nonveg2 },
                { id: 7, name: 'Chicken', imgUrl: nonveg2 },
                { id: 8, name: 'Beef', imgUrl: nonveg2 },
                        { id: 8, name: 'Beef', imgUrl: nonveg2 },
        

        // Add more items as needed
      ];
    
  return (
    <div>
    <Navbar/>
      <div class="text-left" >
                            <ul class="menu-list " >
                            <li>
    <a href="#" className="btn btn-default filter-button" data-filter="all">
      <span style={{ verticalAlign: 'middle' }}>All</span>
    </a>
  </li>
  <li>
    <a href="#chicken" className="btn btn-default filter-button" data-filter="chicken">
      <img src={salad} alt="" className="imgfluid" />
      <span style={{ verticalAlign: 'middle' }}>Chicken</span>
    </a>
  </li>
  <li>
    <a href="#noodles" className="btn btn-default filter-button" data-filter="noodles">
      <img src={salad} alt="" className="imgfluid" />
      <span style={{ verticalAlign: 'middle' }}>Noodles</span>
    </a>
  </li>
  <li>
    <a href="#chicken" className="btn btn-default filter-button" data-filter="chicken">
      <img src={salad} alt="" className="imgfluid" />
      <span style={{ verticalAlign: 'middle' }}>Chicken</span>
    </a>
  </li>
  <li>
    <a href="#noodles" className="btn btn-default filter-button" data-filter="noodles">
      <img src={salad} alt="" className="imgfluid" />
      <span style={{ verticalAlign: 'middle' }}>Noodles</span>
    </a>
  </li>
                               
                            </ul>
                        </div>




    <div className='row ' style={{marginTop:'1%',backgroundColor:'#fff'}}>
        <div className='col-md-12 menu-dishes '>
    
        {product.map((item) => (
  
        <div  className="row no-gutters filter chicken " >
      <div className="col-4 col-sm-4 ">
        <div className="menu-img">
          <img
          src={item.imgUrl}
          alt=""
            className="imgfluid img-thumbnail"
            style={{ padding: 0 }}
          />
        </div>
      </div>
      <div className="col-8 col-sm-8 add-on">
        <div className="menu-item-description">
          <h4>{item.name}</h4>
          <p>{item.dis}</p>
          <h5>${item.price}</h5>
        </div>
      </div>
    </div>
))}
      </div>
    </div>
    <div className='row ' style={{marginTop:'1%',backgroundColor:'#fff'}}>
                <div style={{position:"relative",zIndex:"99999",borderRadius:'8%'}}>
                <div style={{ position: "fixed", top: "91%", left: "25%", width: '50%', transform: 'translateY(-50%)', backgroundColor: '#800', height: '55px', borderRadius: '15px' }}  >
  <span style={{ display: 'flex', alignItems: 'center', height: '100%',}}>
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
// \\\\\\\\
// import React from 'react';
// import './Menu.css'; // Make sure to adjust the import path if needed
// // import styles from './App.module.css';
// const MenuComponent = () => {
//   return (
//     <div className="color-theme-blue push-content-right theme-light">
//       <div className='wrapper'>
//         {/* Sidebar left start */}
//         <div className="sidebar sidebar-left">
//           <div className="profile-link">
//             <a href="#" className="media">
//               <div className="w-auto h-100">
//                 <figure className="avatar avatar-40">
//                   <img src="img/user1.png" alt="" />
//                 </figure>
//               </div>
//               <div className="media-body">
//                 <h5 className="mb-0">
//                   John Doe <span className="status-online bg-success"></span>
//                 </h5>
//                 <p>India</p>
//               </div>
//             </a>
//           </div>
//           <nav className="navbar">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a href="index.html" className="sidebar-close">
//                   <div className="item-title">
//                     <i className="material-icons">star</i> Welcome
//                   </div>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//           <div className="profile-link text-center">
//             <a href="login.html" className="btn btn-link text-white btn-block">
//               Logout
//             </a>
//           </div>
//         </div>
//         {/* Sidebar left ends */}

//         {/* Page main start */}
//         <div className="pages">
//           <form className="searchcontrol">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <button type="button" className="input-group-text close-search">
//                   <i className="material-icons">keyboard_backspace</i>
//                 </button>
//               </div>
//               <input
//                 type="email"
//                 className="form-control border-0"
//                 placeholder="Search..."
//                 aria-label="Username"
//               />
//             </div>
//           </form>
//           <header className="row m-0 fixed-header">
//             <div className="left">
//               <a href="javascript:void(0)" className="menu-left">
//                 <i className="material-icons">menu</i>
//               </a>
//             </div>
//             <div className="col center">
//               <a href="#" className="logo">
//                 <figure>
//                   <img src="img/logo1.png" alt="" />
//                 </figure>
//                 Mr. Chicken Rice
//               </a>
//             </div>
//             <div className="right">
//               <a href="javascript:void(0)" className="searchbtn">
//                 <i className="material-icons">search</i>
//               </a>
//               {/* <a href="javascript:void(0)" className="menu-right">
//                 <i className="material-icons">person</i>
//               </a> */}
//             </div>
//           </header>
//           <div className="page-content">
//             <div className="content-sticky-footer">
//               <div className="container">
//                 <div className="text-left">
//                   <ul className="menu-list" >
//                     <li>
//                       <a
//                         href="#"
//                         className="btn btn-default filter-button"
//                         data-filter="all"
//                         style={{ minWidth: 'auto', padding: '6px' }}
//                       >
//                         <span>All</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#chicken" className="btn btn-default filter-button" data-filter="chicken">
//                         <img    src="photo/nonveg1.jpeg" alt="" className="img-fluid" />
//                         <span>Chicken</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#noodles" className="btn btn-default filter-button" data-filter="noodles">
//                         <img     src="photo/nonveg1.jpeg" alt="" className="img-fluid" />
//                         <span>Noodles</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#salad" className="btn btn-default filter-button" data-filter="Salad">
//                         <img    src="photo/nonveg1.jpeg" alt="" className="img-fluid" />
//                         <span>Salad</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="btn btn-default filter-button">
//                         <img   src="photo/nonveg1.jpeg" alt="" className="img-fluid" />
//                         <span>Noodles</span>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="container menu-dishes">
              
//                   <div className="row no-gutters filter chicken">
//                     <div className="col-4 col-sm-4">
//                       <div className="menu-img">
//                         <img
//                           src="photo/nonveg1.jpeg"
//                           alt=""
//                           className="img-fluid img-thumbnail"
//                           style={{ padding: 0 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-8 col-sm-8">
//                       <div className="menu-item-description">
//                         <h4>Chicken Breast</h4>
//                         <p>Spicy Chicken Breast</p>
//                         <h5>$41.30</h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row no-gutters filter chicken">
//                     <div className="col-4 col-sm-4">
//                       <div className="menu-img">
//                         <img
//                                                   src="photo/nonveg1.jpeg"

//                           alt=""
//                           className="img-fluid img-thumbnail"
//                           style={{ padding: 0 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-8 col-sm-8">
//                       <div className="menu-item-description">
//                         <h4>Chicken Breast</h4>
//                         <p>Spicy Chicken Breast</p>
//                         <h5>$41.30</h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row no-gutters filter chicken">
//                     <div className="col-4 col-sm-4">
//                       <div className="menu-img">
//                         <img
//                           src="photo/nonveg1.jpeg"
//                           alt=""
//                           className="img-fluid img-thumbnail"
//                           style={{ padding: 0 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-8 col-sm-8">
//                       <div className="menu-item-description">
//                         <h4>Chicken Breast</h4>
//                         <p>Spicy Chicken Breast</p>
//                         <h5>$41.30</h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row no-gutters filter chicken">
//                     <div className="col-4 col-sm-4">
//                       <div className="menu-img">
//                         <img
//                           src="photo/nonveg1.jpeg"
//                           alt=""
//                           className="img-fluid img-thumbnail"
//                           style={{ padding: 0 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-8 col-sm-8">
//                       <div className="menu-item-description">
//                         <h4>Chicken With French Fries</h4>
//                         <p>North East Base Spicy Food</p>
//                         <h5>$22.05</h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row no-gutters filter chicken">
//                     <div className="col-4 col-sm-4">
//                       <div className="menu-img">
//                         <img
//                           src="photo/nonveg1.jpeg"
//                           alt=""
//                           className="img-fluid img-thumbnail"
//                           style={{ padding: 0 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-8 col-sm-8">
//                       <div className="menu-item-description">
//                         <h4>Chicken With French Fries</h4>
//                         <p>North East Base Spicy Food</p>
//                         <h5>$22.05</h5>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row no-gutters filter Salad" id="noodles">
//                     <div className="col-4 col-sm-4">
//                       <div className="menu-img">
//                         <img
//                           src="photo/nonveg1.jpeg"
//                           alt=""
//                           className="img-fluid img-thumbnail"
//                           style={{ padding: 0 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-8 col-sm-8">
//                       <div className="menu-item-description">
//                         <h4>Salad</h4>
//                         <p>Green Vegetable Fruit Salad</p>
//                         <h5>$33.69</h5>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row no-gutters filter noodles" id="salad">
//                     <div className="col-4 col-sm-4">
//                       <div className="menu-img">
//                         <img
//                           src="photo/nonveg1.jpeg"
//                           alt=""
//                           className="img-fluid img-thumbnail"
//                           style={{ padding: 0 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-8 col-sm-8">
//                       <div className="menu-item-description">
//                         <h4>Mixed Hakka Noodles</h4>
//                         <p>Chilli, Prawn, Egg, with swezan sauce</p>
//                         <h5>$29.11</h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row no-gutters filter noodles">
//                     <div className="col-4 col-sm-4">
//                       <div className="menu-img">
//                         <img
//                           src="photo/nonveg1.jpeg"
//                           alt=""
//                           className="img-fluid img-thumbnail"
//                           style={{ padding: 0 }}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-8 col-sm-8">
//                       <div className="menu-item-description">
//                         <h4>Mixed Hakka Noodles</h4>
//                         <p>Chilli, Prawn, Egg, with swezan sauce</p>
//                         <h5>$29.11</h5>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <br />
//               <div className="container text-center">
//                 <div className="checkout-btn">
//                   <a href="cart.html">
//                     Checkout <i className="fa-solid fa-cart-shopping"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuComponent;
{/* <div style={{ marginTop: '1%', width: '100%', display: 'flex', flexDirection: 'row', overflowX: 'auto' ,}} className="pos-main ">
{jsonData.map((item) => (
  <div key={item.id} style={{ width: '10%', margin: '1%', flexShrink: 0, ...(isLargeScreen && { width: '10%' }),  
  ...(isMediumScreen && { width: '30%' }),...(isSmallScreen && { width: '45%' }) }} className='cartegory-bar'> 
    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#c23616', borderRadius: '10px' }}>
      <img
        src={item.imgUrl}
        alt=""
        className="imgfluid"
      />
      <div  className='category-name'>
        <span>{item.name}</span>
      </div>
    </div>
  </div>
))}
</div> */}
