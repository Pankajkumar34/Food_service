import React from "react";
const Cards = (props) => {
    const {img,title}=props
    return (
      
          
                
                <div className="card col-md-4 px-3 py-3" style={{width: "18rem"}} >
                    <img src={img} className="card-img-top h-[212px]" alt="..."/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{title}</h5>
                            <p>Price : {props.price}</p>
                            <a href="#" className="btn btn-primary">Order</a>
                        </div>
                </div>
              
       
    )
}
export default Cards