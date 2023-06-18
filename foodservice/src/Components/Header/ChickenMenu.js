import React from "react";
const ChickenList=(props)=>{
    return(
        <>
        <div className="absolute  w-[176px] right-[414px] top-[125px]" style={{display:!props.foodlist?"none":"block"}}>
             <ul className="bg-[#838d00] pl-0 text-center text-[20px] py-3 font-semibold leading-[30px]">
                <li><a herf="#">Chicken Biryani</a></li>
                <li><a herf="#">Chicken Korma</a></li>
                <li><a herf="#">Chicken Fry</a></li>
                <li><a herf="#">FIsh fry</a></li>
                <li><a herf="#">Chicken Tandoory</a></li>
                <li><a herf="#">Chicken Kabab</a></li>
                <li><a herf="#">Butter Chicken</a></li>
                <li><a herf="#">Chicken Tikka</a></li>
                <li><a herf="#"></a>Biryani Korma Roti</li>
             
            </ul>
        </div>
        </>
    )
}
export default ChickenList