import MainPage from "../../../Components/Common/MainPage";
import salad from "../../../assets/Images/salad.png"
import nomeat from "../../../assets/Images/no-meat.png"
import juice from "../../../assets/Images/orange-juice.png"
import pizza from "../../../assets/Images/pizza.png"
import drinks1 from "../../../assets/Images/menu-items/drinks1.jpeg"
import drinks2 from "../../../assets/Images/menu-items/drinks2.jpg"
import drinks3 from "../../../assets/Images/menu-items/drinks3.jpg"
import drinks4 from "../../../assets/Images/menu-items/drinks4.jpeg"
import italian1 from "../../../assets/Images/menu-items/italian1.jpeg"
import italian2 from "../../../assets/Images/menu-items/italian2.jpeg"
import nonveg1 from "../../../assets/Images/menu-items/nonveg1.jpeg"
import nonveg2 from "../../../assets/Images/menu-items/nonveg2.jpeg"
import nonveg3 from "../../../assets/Images/menu-items/nonveg3.jpeg"
import nonveg4 from "../../../assets/Images/menu-items/nonveg4.jpeg"
import veg2 from "../../../assets/Images/menu-items/veg2.jpeg"
import veg1 from "../../../assets/Images/menu-items/veg1.jpeg"
import { useState } from "react";
import MenuItems from "./MenuItems";
import "./menu.css"
import AddNew from "./AddNew";


let Items = [
    {
        logo:veg1,
        type:"Veg Items",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Plates Left"
    },
    {
        logo:nonveg1,
        type:"Non Veg Item",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Plates Left"
    },
    {
        logo:drinks1,
        type:"Drinks Item",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Glass Left"
    },
    {
        logo:nonveg2,
        type:"Non Veg Item",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Plates Left"
    },
    {
        logo:italian1,
        type:"Italian Pizza",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Plates Left"
    },
    {
        logo:nonveg3,
        type:"Non Veg Item",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Plates Left"
    },
    {
        logo:drinks2,
        type:"Drinks Item",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Glass Left"
    },
    {
        logo:nonveg4,
        type:"Non Veg Item",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Plates Left"
    },
    {
        logo:drinks3,
        type:"Drinks Item",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Glass Left"
    },
    {
        logo:italian2,
        type:"Pizza Item",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Plates Left"
    },
    {
        logo:veg2,
        type:"Veg Items",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Plates Left"
    },
    {
        logo:drinks4,
        type:"Drinks Item",
        dec:"Some quick example text to build on the card..",
        price:"$85.59",
        remaining:"5 Glass Left"
    },
]
export default function MenuManagement() {
    const [ items ,setItems] = useState(Items)
    const [isOpen,setIsOpen] = useState(false)
  return (
    <MainPage title={"Menu Management"}>
        
{isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
      <div class="row">
        <div class="col-md-12 text-end">
          <div class="mb-3">
            <button
            onClick={()=>setIsOpen(true)}
              class="btn btn-primary"
            >
              Add New
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div align="center">
            <button onClick={()=>{
                let filterItem = Items.filter(ele=>{
                    return true
                })
                setItems(filterItem)
            }} class="btn btn-default filter-button">
              All Items
            </button>
            <button onClick={()=>{
                let filterItem = Items.filter(ele=>{
                    return ele.type.includes("Veg Items")
                })
                setItems(filterItem)
            }} 
            class="btn btn-default filter-button">
              {" "}
              <img
                src={salad}
                alt=""
                class="img-fluid"
                style={{width: "30px"}}
              />{" "}
              Veg
            </button>
            <button onClick={()=>{
                let filterItem = Items.filter(ele=>{
                    return ele.type.includes("Non Veg Item")
                })
                setItems(filterItem)
            }} 
            class="btn btn-default filter-button">
              <img
                src={nomeat}
                alt=""
                class="img-fluid"
                style={{width: "30px"}}
              />
              Non-Veg
            </button>
            <button onClick={()=>{
                let filterItem = Items.filter(ele=>{
                    return ele.type.includes("Drinks")
                })
                setItems(filterItem)
            }}
            class="btn btn-default filter-button">
              <img
                src={juice}
                alt=""
                class="img-fluid"
                style={{width: "30px"}}
              />{" "}
              Drinks
            </button>
            <button onClick={()=>{
                let filterItem = Items.filter(ele=>{
                    return ele.type.includes("Pizza")
                })
                setItems(filterItem)
            }}
            class="btn btn-default filter-button">
              <img
                src={pizza}
                alt=""
                class="img-fluid"
                style={{width: "30px"}}
              />{" "}
              Italian
            </button>
          </div>
        </div>
      </div>
        <MenuItems items={items} />
    </MainPage>
  );
}
