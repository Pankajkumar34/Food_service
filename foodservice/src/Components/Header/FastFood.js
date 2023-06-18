import React from "react";
const FastFood=(props)=>{
    return(
        <>
        <div className="absolute  w-[176px] top-[125px]" style={{display:!props.foodlist?"none":"block"}}>
            <ul className="bg-[#838d00] pl-0 text-center text-[20px] py-3 font-semibold leading-[30px]">
                <li><a herf="#">Burgers</a></li>
                <li><a herf="#">Pizza</a></li>
                <li><a herf="#">Tacos</a></li>
                <li><a herf="#">Sandwiches</a></li>
                <li><a herf="#">Drinks</a></li>
               
             
            </ul>
        </div>
        </>
    )
}
export default FastFood