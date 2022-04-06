import React from "react";
import"./faqs.css";



const Faqs = () =>{
    return(
        <>
        <div id="faqs-background">
        <div className="container section ">
        <div className="faq-header"> FAQs </div>
         <hr/>
        <div className="row">
        <div className="col-md-6 faqs-part">
           <ol>

            <h4><b>1. How to transfer money to the Earn wallet?</b></h4> 
                <p>First you have to top up your paypenny account through a bank wire transfer or Interac E-transfer, after that you can easily load your earn wallet by click of a button</p> 

                <h4><b>3. Is my money completely safe?</b></h4>
                <p>Your money is completely safe with us we have been serving 7000+ customers and we are licenced and registered with FINTRAC establishing how safe and healthy our paypenny ecosystem is.</p> 

                <h4><b>5. How can I deposit funds?</b></h4>
                <p>You can top your paypenny account through a bank wire transfer or Interac E-transfer. Once the money is there is paypenny wallet you can simply book the investment for the desired amount and time period</p> 

                 <h4><b>7. What is the minimum and maximum amount can I invest?</b></h4> 
                <p>You can start investing from as low as 100 CAD and there is no maximum limit.</p> 

                <h4><b>9. What is the difference between main wallet and Earn wallet?</b></h4> 
                <p>The main wallet is to transfer funds into from your bank account and also to withdraw funds to your bank account whereas Earn wallet is to hold funds and earn interest</p> 

                <h4><b>11. Will my earnings be tax free?</b></h4> 
                <p>No, your earning are not tax free.</p> 

                <h4><b>13. Is there any hidden charges or free?</b></h4> 
                <p>No, there are no hidden charge or free. You will get the same amount as shown in the calculator, provided you don't go to premature withdrawal.</p>  

                <h4><b>15. What does locking period means?</b></h4> 
                <p>locking period is only for 10 days. It simply means you can do the premature withdrawal only after 10 days from the date of booking of yoyr investment. </p> 

                <h4><b>17. Can I use my credit card to invest? </b></h4> 
                <p>No, you can't use credit card for investing money.</p> 

                <h4><b>19. Is there any catch?</b></h4> 
                <p>There is no catch you get the amount what is shown in the calculator. Simply earn.</p>     
              </ol>
            </div>

            <div className="col-md-6 faqs-part">
            <h4><b>2. Why invest with us?</b></h4> 
                <p>Invest with us to eaern Industry's highest fixed interest rates upto 25% per annum on your invested amount, that too for short duration of upto 1 year.</p>  

                <h4><b>4. How can I withdraw my funds?</b></h4> 
                <p>At the end of the maturity period your money automatically comes in the main wallet and from their you can transfer the same to any bank account.</p>  

                 <h4><b>6. How to calculate my earnings?</b></h4> 
                <p>You can easily calculate your earnings by choosing your investment amount and duration in the calculator provided on your Earn wallet page.</p>

                <h4><b>8. Can I used my friends funds to invest?</b></h4> 
                <p>You can use your friend's funds but they can be deposited from your own bank account only.</p>

                <h4><b>10. Do I need to verify myself on the app?</b></h4> 
                <p>If you are an existing user of Paypenny then there is no need for reverification. If you are a new user then as a fully regulated financial services business, we are required to verify the identity of all our customers. However it takes less than a miniute to get verified. </p>

                <h4><b>12. Will you deduct the tax beforehand?</b></h4> 
                <p>Paypenny does not deduct any taxes its on the user's part to comply with the laws of the land.</p>
                <h4><b>14. What if I withdraw before maturity date?</b></h4> 
                <p>You can also withdraw the money prematurely and you will still earn interest @ 10% per annum.</p>

                <h4><b>16. What are the ways to deposit money?</b></h4> 
                <p>You can top up your paypenny account through a bank wire transfer or Interac Etransfer.</p>

                <h4><b>18. Do you allow bank's overdraft money?</b></h4>
                <p>Yes, you may use overdraft money if you want but we encourage you to use the funds freely available to you for investment.</p>

                <h4><b>20. It sounds too good to be true?</b></h4>
                <p>Some people might say this, but what we say is that you are investing in the growth of Paypenny meaning you are growing financially with us.</p>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Faqs;