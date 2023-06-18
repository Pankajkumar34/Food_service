import React from "react";
import foodimg from '../../../image/5753403.jpg'
const Banner=()=>{
    return(
        <>
        <div className="banner w-full h-[500px] bg-cover bg-center  " style={{backgroundImage:`url(${foodimg})`}}>
            {/* <img className="w-[100%]" src={foddbanner}/> */}
        </div>
        
        </>
    )
}

export default Banner