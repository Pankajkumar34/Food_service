import React from "react";
import Cards from "./Cards";
import FoodService from "../../../ArrayFood/ArrayFoos";
const MainCard = () => {
   
    return (
        <div className="container">
            <div className="flex items-center justify-center my-[20px] text-[#faab09] text-[30px] font-bold font-[cursive]">
                <h1>Fresh <span>Food</span>  </h1>
            </div>
            <div className="row gap-5 justify-center">
            {FoodService.map((items, index) => {
                return (
                 
                    <Cards key={index} id={items.id} img={items.image} title={items.Title} price={items.Price}/>
                    
                    
                   
                )

            })}
</div>
        </div>
    )
}
export default MainCard