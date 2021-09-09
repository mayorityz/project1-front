import React from "react";

const Navbar = () => {
  return (
    <>
      <div id="pageloader">
        <div class="loader-item">
          <div class="loader">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
      </div>
      <header class="fixed-top wow fadeInDown header-fullpage">
        <div class="top-bar-right d-flex align-items-center text-md-left">
          <div class="container">
            <div class="row align-items-center">
              <div class="col d-flex align-items-center contact-info">
                <div>
                  <i data-feather="phone"></i>{" "}
                  <a href="tel:+2348142828750">+234 814 2828 750</a>
                </div>
                <div>
                  <i data-feather="mail"></i>{" "}
                  <a href="mailto:info@slum2school.org">info@slum2school.org</a>
                </div>
                <div>
                  <i data-feather="clock"></i> Mon-Fri / 9:00 AM - 19:00 PM
                </div>
              </div>

              <div class="col-md-auto">
                <div class="social-icons">
                  <a href="#">
                    <i class="icofont-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="icofont-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="icofont-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="icofont-behance"></i>
                  </a>
                  <a href="#">
                    <i class="icofont-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg bg-transparent">
          <div class="container text-nowrap">
            <div class="d-flex align-items-center w-100 col p-0 logo-brand">
              <a class="navbar-brand rounded-bottom light-bg" href="index.html">
                <img
                  src="assets/images/slum2school_logo.png"
                  width="70%"
                  height="70%"
                  alt=""
                />
              </a>
            </div>

            <div class="d-inline-flex request-btn order-lg-last col-auto p-0 align-items-center">
              <a class="btn-outline-primary btn ml-3" href="#" id="search_home">
                <i data-feather="search"></i>
              </a>

              <a
                class="nav-link btn btn-default ml-3 donate-btn"
                href="index.html"
              >
                Donate
              </a>

              <button
                class="navbar-toggler x collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <div
              class="collapse navbar-collapse"
              id="navbarCollapse"
              data-hover="dropdown"
              data-animations="slideInUp slideInUp slideInUp slideInUp"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">
                    Home
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Our Work
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Get Involved
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Our Stories
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Careers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section class="breadcrumbs-page-wrap">
        <div class="bg-fixed pos-rel breadcrumbs-page">
          <div class="container">
            <h1>Donation</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
