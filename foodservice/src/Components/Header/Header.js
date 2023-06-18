import React, { useState } from "react";
import Foodimg from '../../image/food.png';
import VegFood from "./VegFood";
import FastFood from "./FastFood";
import ChickenList from "./ChickenMenu";
const Header = () => {
    const menus = ["Veg food", "Fast Food", "non-veg food",]
    const [foodlist,setFoodList]=useState(false)
    const [block,setBlock]=useState("")
console.log(block)
    const menubtns=(list)=>{
       console.log(list)
        setFoodList(!foodlist)
        if("Veg food"===list){
            let blockd={display:"block"}
            setBlock(blockd)
        
       
        }else if("non-veg food"===list){
             
           const block2={display:"block"}
            setBlock(block2)
        }else if("Fast Food"===list){
            // block3={display:"block"}
        
        }

    }
    return (
        <div className="Main-header">
            <div className=" container">
                <div className="flex items-center">
                    <div className="logo w-[20%] ">
                        <img className="max-w-[80px]" src={Foodimg} alt="Food" />
                    </div>
                    <div className="foodsearchbar w-[60%] ">
                        <div className="flex">
                            <input type="text" className="w-[80%] outline-none py-2 rounded" />
                            <button className="rounded px-3 ml-2 bg-white">Search</button>
                        </div>

                    </div>
                    <div className="food-social w-[20%] ">
                        <h4 className="text-white text-[17px] font-semibold">Order</h4>
                    </div>

                </div>

                <div className="flex items-center justify-center ">
                    {menus.map((item, index) => {
                        return (
                            <div className="relative " >
                                <ul >
                                    <li onClick={()=>menubtns(item)} className=" vegfood px-3 py-2 border rounded-md hover:bg-slate-50 
                                     border-black mx-2 my-2 bg-[#efce73] text-black cursor-pointer font-semibold">{item}</li>

                                  
                                </ul>
                              
                            </div>
                        )
                    })}
             
               <VegFood setFoodList={setFoodList} foodlist={foodlist}   />
               <FastFood setFoodList={setFoodList} foodlist={foodlist} />  
               <ChickenList  setFoodList={setFoodList} foodlist={foodlist}/>    
                   
                </div>


            </div>
        </div>
    )
}
export default Header