import React from "react";

const Main = () => {
  return (
    //   sk_test_ee1c6c61e1b3b60fec9f3f5c3b321c6e49fdfee7
    //  pk_test_927f880b6b2f40428705e18e11c06fd5eccd30e9
    <main id="body-content">
      <section class="wide-tb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <h1 class="heading-main">
                <small>Donation</small>I Am More.
              </h1>
              <div class="type_container">
                <div class="d_type checked">Give Once</div>
                <div class="d_type">Monthly</div>
              </div>
              <div class="donation-wrap">
                <h3 class="h3-sm fw-5 txt-blue mb-3 text-center">
                  Select Your Donation Amount
                </h3>
                <div class="row justify-content-center">
                  <div class="col-md-12 ">
                    <div class="form-group">
                      <div class="row mb-2">
                        <div class="col-md-4">
                          <div class="d_options">N10,000</div>
                        </div>
                        <div class="col-md-4">
                          <div class="d_options">N20,000</div>
                        </div>
                        <div class="col-md-4">
                          <div class="d_options">N50,000</div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="d_options">N100,000</div>
                        </div>
                        <div class="col-md-8">
                          <input
                            type="text"
                            class="form-control"
                            id="custom"
                            placeholder="Custom Amount"
                          />
                        </div>
                      </div>
                      <div class="col-md-12 mt-3">
                        <button class="btn btn-default" id="initial">
                          <i data-feather="heart"></i>
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <h3>How Would You Like To Donate?</h3>
                    <div class="row">
                      <div class="col-6">
                        <div class="donate_type">
                          <h6>
                            <input type="radio" name="" id="" /> Become a Spring
                            Member
                          </h6>
                          <p>
                            Your gift today will pre-pay, a year long membership
                            in our monthly giving community. This Spring, we
                            will ask you to renew this time next year.
                          </p>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="donate_type">
                          <h6>
                            <input type="radio" name="" id="" /> Make A One-Time
                            Gift of N50,000
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 mt-3">
                      <button class="btn btn-default" id="second_btn">
                        {" "}
                        Next
                      </button>
                    </div>
                  </div>
                  <div class="">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="last_name"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="zip"
                            placeholder="Zip Code"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 mt-3">
                      <button class="btn btn-default mb-1" id="third_btn">
                        {" "}
                        Pay With Card
                      </button>
                      <button class="btn btn-primary mb-1" id="third_btn">
                        {" "}
                        Donate With Paystack
                      </button>
                      <button class="btn btn-secondary mb-1" id="third_btn">
                        {" "}
                        Donate Through Bank Transfer
                      </button>
                      <button class="btn btn-warning mb-1" id="third_btn">
                        {" "}
                        Donate Through GoFund Me
                      </button>
                      <button class="btn btn-danger mb-1" id="third_btn">
                        {" "}
                        Donate With QuickTeller
                      </button>
                    </div>
                  </div>
                </div>
                <div class="payment_details_option">
                  <h3 class="h3-sm fw-5 txt-blue mb-3 mt-3">Payment Details</h3>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="card"
                          placeholder="Enter your card number"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="card_name"
                          placeholder="Name on your card"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="pos-rel">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Expiry Date"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="security"
                          placeholder="Security Code"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="pos-rel">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="security"
                          placeholder="Phone No."
                        />
                      </div>
                    </div>
                    <div class="col-md-12 mt-3">
                      <button class="btn btn-default">
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
            <div class="col-lg-4 col-md-12">
              <div class="faqs-sidebar pos-rel">
                <div class="bg-overlay blue opacity-80"></div>
                <form>
                  <h3 class="h3-sm fw-7 txt-white mb-3">Have any Question?</h3>
                  <div class="form-group">
                    <label for="fullname">
                      <strong>Full Name</strong>
                    </label>
                    <input
                      type="text"
                      class="form-control form-light"
                      id="fullname"
                    />
                  </div>
                  <div class="form-group">
                    <label for="emailform">
                      <strong>Email Address</strong>
                    </label>
                    <input
                      type="email"
                      class="form-control form-light"
                      id="emailform"
                    />
                  </div>
                  <div class="form-group">
                    <label for="questionmsg">
                      <strong>How can help you?</strong>
                    </label>
                    <textarea
                      class="form-control form-light"
                      rows="5"
                      id="questionmsg"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-default mt-3">
                    Ask It Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="wide-tb-150 bg-scroll bg-img-6 pos-rel callout-style-1">
        <div class="bg-overlay blue opacity-80"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <h1 class="heading-main light-mode">
                <small>Help Other People</small>
                Our Dream is To Create A Bright Future For The Underprivileged
                Children
              </h1>
            </div>
            <div class="col-sm-12 text-md-right">
              <a href="index.html" class="btn btn-default">
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
