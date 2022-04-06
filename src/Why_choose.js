import React from "react";
import "./why_choose.css";


const Why_choose = () =>{
    return(
        <>
         <div id="whychoose-background">
        <div className="homepage">
            <h1 className="heading">Why Choose Us?</h1>            
        </div>
  
    <div className="container section ">
        <div className="row">
            <div className="col-md-6 why-choose">
              <h3>We give you the highest return :</h3>
              <p>We pay highest fixed returns worldwide.</p><br/>
                </div>

            <div className="col-md-6 why-choose">
               <h3>We are safe :</h3>
               <p className="we-give">Our industry-leading technology protects your investment and deliver it to you as and when required.</p>
            </div>
        </div>
        <h2 className="choose-back">Start investing now to earn maximum returns</h2>
    </div>
</div>

        </>
    )
}

export default Why_choose;