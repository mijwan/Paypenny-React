import React from "react";

const PaymentApp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
          <h1>
            With Paypenny You Can Transfer INR(D) from Canada to 125+ banks
            across India
          </h1>
          <h3>
            Paypenny gives you nationwide coverage of India. Transfer INR(D)
            easily to bank accounts at ICICI, SBI, Citi Bank, Axis Bank and many
            more!
          </h3>
          <a href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US" target="_blank"><button className="mt-5" data-aos="zoom-in-up">
            Download PayPenny App
          </button></a>
        </div>
        <div className="col-12 col-lg-6">
          <div className="sideImage sideImage-paypenny">
            <img
              src="https://paypenny.io/wp-content/uploads/2021/12/2-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default PaymentApp;