import React, { useState } from "react";
import HttpServices from "../HttpServices";

const Main = () => {
  // set the section
  const [duration, setDuration] = useState("Give Once");
  const [amount, setAmount] = useState(0);
  const [isMembership, setMembership] = useState("");
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState(0);
  const [btn, setBtn] = useState(false);

  const selectDuration = (duration) => setDuration(duration);
  const enterAmt = (amount) => setAmount(amount);
  const setMem = (type) => setMembership(type);

  const [msg, setMsg] = useState("");

  const payWithPaystack = async () => {
    setBtn(true);
    setMsg("Processing Payment! Please Wait!!");
    const parameters = {
      duration,
      amount,
      isMembership,
      firstname: fn,
      lastname: ln,
      email,
      zip,
    };
    let payment = new HttpServices("/paystack/init");
    let save = await payment.post(parameters);
    if (save.status) {
      window.location = save.data.authorization_url;
    } else {
      alert("An Error Occured, please try again!!!");
      setBtn(false);
      setMsg("");
    }
  };

  return (
    <main id="body-content">
      <section classsName="wide-tb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <h1 className="heading-main">
                <small>Donation</small>I Am More.
              </h1>
              {/* d_type */}
              <div className="type_container">
                <div
                  className="d_type checked"
                  onClick={() => selectDuration("Give Once")}
                >
                  Give Once
                </div>
                <div
                  className="d_type"
                  onClick={() => selectDuration("Monthly")}
                >
                  Monthly
                </div>
              </div>
              <div className="donation-wrap">
                <span className="donation_selection">
                  <h3 className="h3-sm fw-5 txt-blue mb-3 text-center">
                    Select Your Donation Amount
                  </h3>
                  <div className="row justify-content-center">
                    <div className="col-md-12 ">
                      <div className="form-group">
                        <div className="row mb-2">
                          <div className="col-md-4">
                            <div
                              className="d_options"
                              onClick={() => enterAmt(10000)}
                              style={{
                                backgroundColor: amount === 10000 && "#000",
                                color: amount === 10000 && "#fff",
                              }}
                            >
                              N10,000
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div
                              className="d_options"
                              onClick={() => enterAmt(20000)}
                              style={{
                                backgroundColor: amount === 20000 && "#000",
                                color: amount === 20000 && "#fff",
                              }}
                            >
                              N20,000
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div
                              className="d_options"
                              onClick={() => enterAmt(50000)}
                              style={{
                                backgroundColor: amount === 50000 && "#000",
                                color: amount === 50000 && "#fff",
                              }}
                            >
                              N50,000
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div
                              className="d_options"
                              onClick={() => enterAmt(100000)}
                              style={{
                                backgroundColor: amount === 100000 && "#000",
                                color: amount === 100000 && "#fff",
                              }}
                            >
                              N100,000
                            </div>
                          </div>
                          <div className="col-md-8">
                            <input
                              type="text"
                              className="form-control"
                              id="custom"
                              placeholder="Custom Amount"
                              value={amount}
                              onChange={({ target: { value } }) =>
                                setAmount(value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <button className="btn btn-default" id="initial">
                            <i data-feather="heart"></i>
                            Donate Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>

                <div className="row justify-content-center">
                  <div className="how_to_donate">
                    <h3>How Would You Like To Donate?</h3>
                    <div className="row">
                      <div className="col-6">
                        <div className="donate_type">
                          <h6>
                            <input
                              type="radio"
                              name="donation_type"
                              onClick={() => setMem("spring member")}
                            />{" "}
                            Become a Spring Member
                          </h6>
                          <p>
                            Your gift today will pre-pay, a year long membership
                            in our monthly giving community. This Spring, we
                            will ask you to renew this time next year.
                          </p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="donate_type">
                          <h6>
                            <input
                              type="radio"
                              name="donation_type"
                              onClick={() => setMem("one time")}
                            />{" "}
                            Make A One-Time Gift of N{amount}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <button className="btn btn-default" id="second_btn">
                        Next
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="user_info_payment_field">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="First Name"
                            value={fn}
                            onChange={({ target: { value } }) => setFn(value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            placeholder="Last Name"
                            value={ln}
                            onChange={({ target: { value } }) => setLn(value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={({ target: { value } }) =>
                              setEmail(value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="zip"
                            placeholder="Zip Code"
                            value={zip}
                            onChange={({ target: { value } }) => setZip(value)}
                          />
                        </div>
                      </div>
                    </div>
                    {msg && (
                      <div className="alert alert-warning text-center mt-3">
                        {msg}
                      </div>
                    )}
                    <div className="col-md-12 mt-3">
                      <button className="btn btn-default mb-1" id="third_btn">
                        Pay With Card
                      </button>{" "}
                      <button
                        className="btn btn-primary mb-1"
                        id="third_btn"
                        onClick={payWithPaystack}
                        disabled={btn}
                      >
                        Donate With Paystack
                      </button>{" "}
                      <button className="btn btn-secondary mb-1" id="third_btn">
                        Donate Through Bank Transfer
                      </button>{" "}
                      <button className="btn btn-warning mb-1" id="third_btn">
                        Donate Through GoFund Me
                      </button>{" "}
                      <button className="btn btn-danger mb-1" id="third_btn">
                        Donate With E-Transact
                      </button>
                    </div>
                  </div>
                </div>

                <div className="payment_details_option">
                  <h3 className="h3-sm fw-5 txt-blue mb-3 mt-3">
                    Payment Details
                  </h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="card"
                          placeholder="Enter your card number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="card_name"
                          placeholder="Name on your card"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="pos-rel">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Expiry Date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="security"
                          placeholder="Security Code"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="pos-rel">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="security"
                          placeholder="Phone No."
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <button className="btn btn-default">
                        <i data-feather="heart"></i> Donate Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <p>
                We are excited to have you join us on this very impactful and
                historic journey that is aimed at raising funds to provide
                scholarships for 5,000 out-of-school children living in slums
                and remote communities in Nigeria.
              </p>

              <p>
                You can make donations using your preferred platform below and
                by filling out this form we will be able to share your donor
                appreciation badge with you and keep you updated on how your
                donation is making an impact in the life of children living in
                the slum.
              </p>

              <p>
                We appreciate you for deciding to come along with us as we work
                together to help thousands of children in underserved
                communities BE MORE.
              </p>

              <p>Thanks for your support. Sign-up and #LetsDoMore</p>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="faqs-sidebar pos-rel">
                <div className="bg-overlay blue opacity-80"></div>
                <form>
                  <h3 className="h3-sm fw-7 txt-white mb-3">
                    Have any Question?
                  </h3>
                  <div className="form-group">
                    <label for="fullname">
                      <strong>Full Name</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control form-light"
                      id="fullname"
                    />
                  </div>
                  <div className="form-group">
                    <label for="emailform">
                      <strong>Email Address</strong>
                    </label>
                    <input
                      type="email"
                      className="form-control form-light"
                      id="emailform"
                    />
                  </div>
                  <div className="form-group">
                    <label for="questionmsg">
                      <strong>How can help you?</strong>
                    </label>
                    <textarea
                      className="form-control form-light"
                      rows="5"
                      id="questionmsg"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-default mt-3">
                    Ask It Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wide-tb-150 bg-scroll bg-img-6 pos-rel callout-style-1">
        <div className="bg-overlay blue opacity-80"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="heading-main light-mode">
                <small>Help Other People</small>
                Our Dream is To Create A Bright Future For The Underprivileged
                Children
              </h1>
            </div>
            <div className="col-sm-12 text-md-right">
              <a href="index.html" className="btn btn-default">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
