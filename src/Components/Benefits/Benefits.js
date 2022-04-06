import React from "react";

const Benefits = () => {
  return (
    <div className="p-5" style={{ background: "#0F4A8A" }}>
      <div className="container benefits-container">
        <h1 className="text-light mb-5 benefits-header">
          Benefits of sending INR(D) with Paypenny
        </h1>
        <div className="row benefite-half-card">
          <div className="col-12 col-lg-4" data-aos="zoom-in-right">
            <div
              className="benefitsCards
            "
            >
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/Government.gif"
                alt=""
              />
              <h5>Govt Reg & Regulated</h5>
              <p>
                Our company is registered with FINTRAC which clearly mentions
                how healthy our paypenny ecosystem is.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-out">
            <div
              className="benefitsCards
            "
            >
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/AnytimeAnywhere.gif"
                alt=""
              />
              <h5>Anytime Anywhere</h5>
              <p>
                We are available for you every time that's the reason we have
                made our system powerful and anyone can access it anytime
                anywhere.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in-left">
            <div
              className="benefitsCards
            "
            >
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/BetterRate.gif"
                alt=""
              />
              <h5>Better Rates</h5>
              <p>
                Sending INR(D) home to India is up to twenty times cheaper with
                paypenny than the banks.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4" data-aos="zoom-in-right">
            <div
              className="benefitsCards
            "
            >
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/Easy.gif"
                alt=""
              />
              <h5>Easy & Convenient</h5>
              <p>
                Get started in minutes with our simple signup process. Remit to
                India on the go with our mobile app
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-out">
            <div
              className="benefitsCards
            "
            >
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/Tracking.gif"
                alt=""
              />
              <h5>Track your transfer online</h5>
              <p>
                Don't lose sight of your INR(D). Track your transfer at every
                stage.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in-left">
            <div
              className="benefitsCards
            "
            >
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/Support.gif"
                alt=""
              />
              <h5>Round The Clock Support</h5>
              <p>
                Our amazing customer support team are on standby to help you
                when need them. Get an answer to your question, fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;