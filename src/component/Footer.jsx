import React from "react";
const Footer = () => {
  return (
    <>
      <footer class="wide-tb-70 pb-0 mb-spacer-md">
        <div class="container pos-rel">
          <div class="row">
            <div class="col-lg-5 col-md-10">
              <div class="footer-subscribe">
                <h3>Newsletter</h3>
                <h2>Get Update Every Week</h2>
                <div class="input-wrap">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Email"
                  />
                  <button type="submit" class="btn btn-default">
                    Subscribe now
                  </button>
                </div>
              </div>
            </div>
            <div class="give-us-call">
              <i data-feather="phone"></i>
              <h4>Give us a call</h4>
              <h3>+234 814 2828 750</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="logo-footer">
                <img src="assets/images/slum2school_logo.png" alt="" />
              </div>
              <p>
                Slum2School is a volunteer-driven development organization
                transforming the society by empowering underserved children in
                slums and remote communities with quality education,
                entrepreneurial skills, and psychosocial support to enable them
                to realize their full potential and become social reformers.
              </p>
              <div class="social-icons">
                <ul class="list-unstyled list-group list-group-horizontal">
                  <li>
                    <a href="#">
                      <i class="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-youtube-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <h3 class="footer-heading">Contact Info</h3>

              <div class="footer-widget-contact">
                <ul class="list-unstyled">
                  <li>
                    <div>
                      <i data-feather="map-pin"></i>{" "}
                    </div>
                    <div>
                      13 Babatope Bejide Crescent, Lekki Phase 1, Lagos Nigeria
                    </div>
                  </li>
                  <li>
                    <div>
                      <i data-feather="phone"></i>{" "}
                    </div>
                    <div>
                      <a href="tel:+2348142828750">+234 814 2828 750</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i data-feather="mail"></i>{" "}
                    </div>
                    <div>
                      <a
                        href="mailto:
                                    info@slum2school.org"
                      >
                        info@slum2school.org
                      </a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i data-feather="clock"></i>{" "}
                    </div>
                    <div>Mon-Fri / 9:00 AM - 19:00 PM</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-100 d-none d-md-block d-lg-none spacer-30"></div>
            <div class="col-lg-2 col-md-6">
              <h3 class="footer-heading">Explore Us</h3>
              <div class="footer-widget-menu">
                <ul class="list-unstyled">
                  <li>
                    <a href="#">
                      <i class="icofont-simple-right"></i> <span>About Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-simple-right"></i>{" "}
                      <span>Our Programs</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-simple-right"></i>{" "}
                      <span>Meet Our Team</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-simple-right"></i>{" "}
                      <span>Beneficiaries Stories</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont-simple-right"></i>{" "}
                      <span>Success History</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h3 class="footer-heading">Photo Gallery</h3>
              <ul id="basicuse" class="photo-thumbs"></ul>
              <div id="instagram-feed5" class="instagram_feed"></div>
            </div>
          </div>
        </div>

        <div class="copyright-wrap">
          <div class="container pos-rel">
            <div class="row text-md-left text-center">
              <div class="col-sm-12 col-md-auto copyright-text">
                © Copyright <span class="txt-blue">Slum2School</span> 2021. |
                Created by{" "}
                <a href="#" rel="nofollow">
                  mayor
                </a>
              </div>
              <div class="col-sm-12 col-md-auto ml-md-auto text-md-right text-center copyright-links">
                <a href="#">Terms & Condition</a> |{" "}
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="overlay overlay-hugeinc">
        <form class="form-inline mt-2 mt-md-0">
          <div class="form-inner">
            <div class="form-inner-div d-inline-flex align-items-center no-gutters">
              <div class="col-md-1">
                <i class="icofont-search"></i>
              </div>
              <div class="col-10">
                <input
                  class="form-control w-100 p-0"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div class="col-md-1">
                <a href="#" class="overlay-close link-oragne">
                  <i class="icofont-close-line"></i>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>

      <a id="mkdf-back-to-top" href="#" class="off">
        <i data-feather="corner-right-up"></i>
      </a>
    </>
  );
};

export default Footer;
