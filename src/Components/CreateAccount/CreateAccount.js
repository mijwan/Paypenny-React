import React from "react";
import "./account.css";

const CreateAccount = () => {
  return (
    <div className="p-5" style={{ background: "#00BAF2" }}>
      <div className="container create-Container">
        <div className="row">
          <div className="col-12 col-lg-3" data-aos="zoom-in">
            <div className="midCard">
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/1.png"
                alt=""
              />
              <h5>Create your account</h5>
              <p>
                Register online, enter your personal details for ID
                verification. Make sure what you enter matches exactly with your
                identification documents.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3" data-aos="zoom-in">
            <div className="midCard">
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/ChooseMethod.gif"
                alt=""
              />
              <h5>Choose method</h5>
              <p>
                We’ll show you the exchange rate and you Select the Method to
                add the INR(D) to your wallet.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3" data-aos="zoom-in">
            <div className="midCard">
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/ReceiverDetails.gif"
                alt=""
              />
              <h5>Input receiver details</h5>
              <p>Tell us the details of the person receiving the INR(D).</p>
            </div>
          </div>
          <div className="col-12 col-lg-3" data-aos="zoom-in">
            <div className="midCard">
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/Confirm.gif"
                alt=""
              />
              <h5>Confirm and send</h5>
              <p>
                Verify and cross check everything is correct and send your
                INR(D). That’s it. We’ll take care of the rest and tell you when
                INR(D) is transferred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;