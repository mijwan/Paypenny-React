import React from "react";
import "./Component2.css";



const Component2 = () =>{
    return(
        <>

<div className="container section">
        <div className="faq-header"> Frequently Asked Questions </div>
<hr/>
        <div className="row">
        <div className="col-md-6 component-part">
               <h2 className="topResearch">How can I top up my Paypenny account?</h2>
            <p>You can top up your paypenny account through a bank wire transfer or Interac E- transfer. <br/><br/><br/></p>
            </div>

            <div className="col-md-6 component-part">
              <h2 className="topResearch">Do I need to verify my account?</h2>
              <p>
              As a fully regulated financial services business, we are required to verify the identity of all our customers. Where possible we attempt to speed up the process through electronic checks. Where this isn’t possible, we require proof of identification.
                </p>               
            </div>
        </div>
    </div>

        </>
    )
}

export default Component2;





import React,{useState} from "react";
import "./component.css";



const Component = () =>{

    const [name , setName] = useState("100");
    const [name1 , setName1] = useState("10");

    const InputEvent = (e) =>{
         setName(e.target.value);
        }
        const InputEvent1 = (e) =>{
            setName1(e.target.value);
        }

    const Calculator = () =>{
        const amount_input = parseInt(document.getElementById("input_Amount").value);
       const rate_input = parseInt(document.getElementById("interest_data").value);
       const time_input = parseInt(document.getElementById("duration").value);
      const interest = amount_input * rate_input/100 * time_input/365;
      const total = interest + amount_input;

      const total1 = total.toFixed(2);
      document.getElementById("output_1").innerHTML = total1;    
    }   

    let intObj = {
        10: 10,
        15: 11,
        30: 12,
        45: 13,
        60: 14,
        90: 15,
        180: 17,
        365: 25 
    } 
    const SetValue = () =>{  
    const currVal = document.getElementById("duration"); 
    const setData = document.getElementById("interest_data");   
    setData.value = intObj[currVal.value];  
    console.log(setData.value);
    }

    return(
        <>
       <div className="container section calculate-section">
        <div className="row">
        {/* <h2 className="cad-header">An exciting opportunity to earn maximum returns in CAD</h2>
        <p className="cad-header-para">One Stop investment solution to get the best investment. Thousands of investors trust Paypenny</p> */}
            <div className="col-md-6 calculate-part">
              <p className="topResearch" >Paypenny present's earn wallet</p><br/>
              <p>Exciting opportunity to earn massive interests on your savings. Thousands of investers trust Paypenny.</p>
                <h3 className="who-para">
                Earn Wallet
                </h3>
                <p className="wallet-para">Invest to earn upto 25% per annum in CAD. Get the industry's best return on investment, that too by investing for as low as 10 days.</p>

          <label>Amount &nbsp; </label>
          <input type="text" 
          id="input_Amount"
           value={name}
           onChange={InputEvent}/>&nbsp;

          <label className="duration">Duration:</label>
          <select name="duration" id="duration" onChange={SetValue} >
              <option value="10" className="input_time" >10 days</option>
              <option value="15" className="input_time1">15 days</option>
              <option value="30" className="input_time2">30 days</option>
              <option value="45" className="input_time3">45 days</option>
              <option value="60" className="input_time4">60 days</option>
              <option value="90" className="input_time5">90 days</option>
              <option value="180" className="input_time6">180 days</option>
              <option value="365" className="input_time7">365 days</option>
          </select>&nbsp;
          <label className="roi-annum">ROI(Per Annum):&nbsp; </label>
          <input type="text"
           id="interest_data" 
           value={name1}
           onChange={InputEvent1}
           />
                <button onClick={Calculator}>Maturity Amount</button> <span id="output_1" className="output_part">100.27 </span>
         
         <div className="cad_table">
             <table className="roi-table" border="1">
                 <tr>
                     <th>Duration</th>
                     <th>ROI (per annum)</th>
                 </tr>
                 <tr>
                     <td>10 days</td>
                     <td>10%</td>
                 </tr>
                 <tr>
                     <td>15 days</td>
                     <td>11%</td>
                 </tr>
                 <tr>
                     <td>30 days</td>
                     <td>12%</td>
                 </tr>
                 <tr>
                     <td>45 days</td>
                     <td>13%</td>
                 </tr>
             </table>

             <table border="1" className="roi-table roi-table1">
                 <tr>
                     <th>Duration</th>
                     <th>ROI (per annum)</th>
                 </tr>
                 <tr>
                     <td>60 days</td>
                     <td>14%</td>
                 </tr>
                 <tr>
                     <td>90 days</td>
                     <td>15%</td>
                 </tr>
                 <tr>
                     <td>180 days</td>
                     <td>17%</td>
                 </tr>
                 <tr>
                     <td>365 days</td>
                     <td>25%</td>
                 </tr>
             </table>
         </div>


        </div>

            <div className="col-md-6">
                <img src="media/3.png" alt="Who we are"/>
            </div>
        </div>
    </div>
    </>
    )
}

export default Component;