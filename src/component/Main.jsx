import axios from 'axios'
import React, { useState } from 'react'
import HttpServices from '../HttpServices'
import { useParams } from 'react-router-dom'

const Main = () => {
  const { status } = useParams()
  // set the section
  const [duration, setDuration] = useState('Give Once')
  const [amount, setAmount] = useState('')
  const [isMembership, setMembership] = useState('')
  const [fn, setFn] = useState('')
  const [ln, setLn] = useState('')
  const [email, setEmail] = useState('')
  const [zip, setZip] = useState('')
  const [referral, setReferral] = useState('')
  const [btn, setBtn] = useState(false)

  const selectDuration = (duration) => setDuration(duration)
  const enterAmt = (amount) => setAmount(amount)
  const setMem = (type) => setMembership(type)

  const [msg, setMsg] = useState('')
  const [accountDetails, setAccountDetails] = useState(true)

  const payWithPaystack = async () => {
    setBtn(true)
    setMsg('Processing Payment! Please Wait!!')
    const parameters = {
      duration,
      amount,
      firstName: fn,
      lastName: ln,
      email,
      zip,
      isMembership: 'ignored!',
      referral,
    }

    if (!duration) {
      setMsg("You didn't select a duration!")
      setBtn(false)
      return
    }
    if (!amount) {
      setMsg("You didn't select an amount!")
      setBtn(false)
      return
    }
    if (!fn) {
      setMsg('Enter your first name!')
      setBtn(false)
      return
    }
    if (!ln) {
      setMsg('Enter your last name!')
      setBtn(false)
      return
    }
    if (!zip) {
      setMsg('You need to add your phone number!')
      setBtn(false)
      return
    }
    if (!email) {
      setMsg("You haven't entered an email address!")
      setBtn(false)
      return
    }

    let payment = new HttpServices('/paystack/init')
    let save = await payment.post(parameters)
    if (save.status) {
      window.location = save.data.authorization_url
    } else {
      alert('An Error Occured, please try again!!!')
      setBtn(false)
      setMsg('')
    }
  }

  const payWithETranzact = async () => {
    setMsg('Processing eTranzact Payment! Please Wait!!')
    setBtn(true)
    let _data = {
      fn,
      ln,
      email,
      zip,
      amount,
      isMembership: 'ignored!',
      referral,
      duration,
      amount,
    }

    let { data } = await axios.post(
      'https://slum2school.herokuapp.com/etranzact/init',
      _data,
    )

    if (data.status) {
      window.location = data.url
    } else {
      setMsg(data.message)
      setBtn(false)
    }
  }

  const payWithPaypal = () => {
    let paypalAction = document.querySelector('.pay_pal')
    paypalAction.click()
  }

  const revealBankDetails = () => setAccountDetails(false)

  return (
    <main id="body-content">
      <section classsName="wide-tb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {/* <h1 className="heading-main">
                <small>Donation</small>I Am More.
              </h1> */}
              {/* d_type */}
              {status === 'success' && (
                <div className="alert alert-success mt-5">
                  <p>YOU ARE MORE!!! ????</p>

                  <p>
                    Thank you for making a donation to support the #IamMore
                    Campaign. Because of you, many more amazing children will
                    get access to quality education, good healthcare, and a
                    happier family.{' '}
                  </p>

                  <p>
                    We look forward to sharing updates and answering any
                    questions you may have.{' '}
                  </p>

                  <p>
                    In the meantime, feel free to contact Slum2School's quick
                    line 0700 5555 566 if you have any urgent concerns.
                  </p>
                  <p className="text-center">
                    ?????Thanks||Slum2School Africa||#IamMore
                  </p>
                </div>
              )}
              {status === 'failed' && (
                <div className="alert alert-danger mt-5">
                  <p className="text-center">
                    Ooops! It looks like your payment was canceled!
                  </p>
                </div>
              )}
              <div className="type_container">
                <div
                  className="d_type checked"
                  onClick={() => selectDuration('Give Once')}
                >
                  Give Once
                </div>
                <div
                  className="d_type"
                  onClick={() => selectDuration('Monthly')}
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
                                backgroundColor: amount === 10000 && '#000',
                                color: amount === 10000 && '#fff',
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
                                backgroundColor: amount === 20000 && '#000',
                                color: amount === 20000 && '#fff',
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
                                backgroundColor: amount === 50000 && '#000',
                                color: amount === 50000 && '#fff',
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
                                backgroundColor: amount === 100000 && '#000',
                                color: amount === 100000 && '#fff',
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
                              placeholder="Other Amount"
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
                              onClick={() => setMem('spring member')}
                            />{' '}
                            Become A Recurring Donor
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
                              onClick={() => setMem('one time')}
                            />{' '}
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
                        <div className="form-group mb-3">
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
                            placeholder="Phone Number"
                            value={zip}
                            onChange={({ target: { value } }) => setZip(value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="mt-3" htmlFor="">
                          How did you hear about the "I am More" Campaign?
                        </label>
                        <textarea
                          rows="5"
                          placeholder="Fill the name of the volunteer who introduced you, if any."
                          value={referral}
                          onChange={({ target: { value } }) =>
                            setReferral(value)
                          }
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>

                    <div style={{ display: accountDetails ? 'none' : 'block' }}>
                      <h2 className="text-center mt-3">
                        ACCOUNT DETAILS (NG) - Bank Transfers
                      </h2>
                      <hr />
                      <div className="row">
                        <div className="col-md-4">
                          GUARANTY TRUST BANK <br />
                          SLUM2SCHOOL <br />
                          0130659207
                        </div>
                        <div className="col-md-4">
                          ZENITH BANK
                          <br />
                          SLUM2SCHOOL
                          <br />
                          1013299207
                        </div>
                        <div className="col-md-4">
                          ACCOUNT DETAILS (DOM) GUARANTY TRUST BANK <br />
                          USD ??? 0537747152
                          <br />
                          GBP ??? 0537747169
                          <br />
                          EURO ??? 0537747918
                        </div>
                      </div>
                    </div>

                    {msg && (
                      <div className="alert alert-warning text-center mt-3">
                        {msg}
                      </div>
                    )}
                    <hr />
                    <div className="col-md-12 mt-3">
                      {/* <button className="btn btn-default mb-1" id="third_btn" disabled>
                        Pay With Card
                      </button>{" "} */}
                      <button
                        className="btn btn-primary mb-1"
                        onClick={payWithPaystack}
                        disabled={btn}
                      >
                        Donate With Paystack
                      </button>{' '}
                      <button
                        className="btn btn-secondary mb-1"
                        id=""
                        disabled={btn}
                        onClick={revealBankDetails}
                      >
                        Donate Through Bank Transfer
                      </button>{' '}
                      {/* <button className="btn btn-warning mb-1" id="third_btn" disabled>
                        Donate Through GoFund Me
                      </button>{" "} */}
                      <button
                        className="btn btn-danger mb-1"
                        id=""
                        onClick={payWithETranzact}
                        disabled={btn}
                      >
                        Donate With E-Tranzact
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={payWithPaypal}
                      >
                        Pay With Paypal
                      </button>
                      <form
                        action="https://www.paypal.com/donate"
                        method="post"
                        target="_top"
                        style={{ display: 'none' }}
                      >
                        <input
                          type="hidden"
                          name="hosted_button_id"
                          value="8RL6KXV2X37HL"
                        />
                        <input
                          type="image"
                          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                          border="0"
                          name="submit"
                          title="PayPal - The safer, easier way to pay online!"
                          className="pay_pal"
                          alt="Donate with PayPal button"
                        />
                        <img
                          alt=""
                          border="0"
                          src="https://www.paypal.com/en_NG/i/scr/pixel.gif"
                          width="1"
                          height="1"
                        />
                      </form>
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
                For every amount you give, more out-of-school children will be
                supported, educated and impacted.{' '}
              </p>{' '}
              <p>
                {' '}
                We are excited to have you join us on this very impactful
                journey that is aimed at raising funds to provide scholarships
                for 5,000 out-of-school children living in slums and underserved
                communities in Nigeria.{' '}
              </p>{' '}
              <p>
                {' '}
                We appreciate you for deciding to come along with us as we work
                together to help thousands of children in underserved
                communities BE MORE.
              </p>
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
                      <strong>Message</strong>
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
              <a href="#" className="btn btn-default">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
