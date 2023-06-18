import React from "react";
const VegFood=(props)=>{
    console.log("p",props)
    return(
        <>
        <div className="absolute left-[438px] w-[176px] top-[125px]" >
            <ul className="bg-[#838d00] pl-0 text-center text-[20px] py-3 font-semibold leading-[30px]">
                <li><a herf="#">Mix Veg</a></li>
                <li><a herf="#">Chhole</a></li>
                <li><a herf="#">Pav Bhaji</a></li>
                <li><a herf="#">Panner Rice</a></li>
                <li><a herf="#">Rajma Rice</a></li>
                <li><a herf="#">Pulav</a></li>
                <li><a herf="#">Brown Rice</a></li>
                <li><a herf="#">Roti</a></li>
                <li><a herf="#"></a>Paratha</li>
             
            </ul>
        </div>
        </>
    )
}
export default VegFood