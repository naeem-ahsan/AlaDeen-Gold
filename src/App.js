import React from "react";
import { Component } from "react";
import Backtop from "./Backtop";
import Download from "./routes/Download";
import Footer from "./routes/Footer";

export default class App extends Component {
    render() {
        return(
          <>
            {/* Navbar-Section */}
            <nav className="navigation z-depth-3">
              <div className="nav-wrapper">
                <div className="row">
                  <div className="col s12">
                    <a href="#particles-js" className="nav-name">AlaDeen Gold</a>
                    <a href="#particles-js" className="nav-logo brand-logo center"><img src="img/AGCB-LOGO-4.png" className="responsive-img" alt="Company Logo" /></a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger">{/* eslint-disable */}<i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                      <li><a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=io.aladeen.trader" className="waves-effect waves-light btn red lighten-1">Play Store</a></li>
                      <li><a target="_blank" rel="noreferrer" href="https://apps.apple.com/my/app/aladeen-gold-wallet/id1573265523" className="waves-effect waves-light btn red lighten-1">App Store</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
              <li><a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=io.aladeen.trader" className="waves-effect waves-light btn btn-large red lighten-1">Play Store</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://apps.apple.com/my/app/aladeen-gold-wallet/id1573265523" className="waves-effect waves-light btn btn-large red lighten-1">App Store</a></li>
            </ul>
            {/* Banner-Section */}
            <section id="particles-js" className="home-banner section-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col s12 m12 l5">
                    <div className="hero-left-content">
                      <h1>
                        AlaDeen Gold <span>Wallet</span>
                      </h1>
                      <p>
                        Provides an easy and secure platform to buy and sell gold
                        and silver for consumers and enterprises alike. Available on
                        App Store and Google Play. Get your gold now…!
                      </p>
                      <div className="hero-button-box">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://apps.apple.com/my/app/aladeen-gold-wallet/id1573265523"
                          style={{marginRight: "10px"}}
                        >
                          <img
                            src="img/apple-store-icon.png"
                            className="responsive-img"
                            alt="Apple Store"
                          />
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://play.google.com/store/apps/details?id=io.aladeen.trader"
                        >
                          <img
                            src="img/google-play-store-icon.png"
                            className="responsive-img"
                            alt="Play Store"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col m12 l7 wow fadeInRight"
                    data-wow-duration="2000ms"
                  >
                    <div className="hero-right-content">
                      <img src="img/hero-mobile-bg-effect.png" alt="" />
                      <div className="hero-right-top-frame">
                        <img
                          src="img/mobile-mockup.png"
                          alt=""
                          className="responsive-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Partner-Section */}
            <section id="partner" className="section-wrapper-sm">
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <div className="partner-company owl-carousel">
                      <div><img src="img/Al-ebreiz logo.png" alt="" /></div>
                      <div><img src="img/GA-Skylight-Banner.png" alt="" /> </div>
                      <div><img src="img/logo-2-2048x509-1.png" alt="" /></div>
                      <div><img src="img/Uvendtech-Banner.png" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* About-Section */}
            <section id="about" className="section-wrapper-sm">
              <div>
                <div className="row">
                  <div className="col s12 m5 l6">
                    <div className="abt-left-pic wow fadeInLeft" data-wow-duration="2000ms">
                      <img className="responsive-img" src="img/Mobile .png"
                        alt="AlaDeen Gold App pic" />
                    </div>
                  </div>
                  <div className="col s12 m7 l6">
                    <div className="abt-right-content section-content-pt">
                      <div className="sec-content">
                        <div className="about-heading section-heading">
                          <h3>A good decision can change your life</h3>
                        </div>
                        <div className="sec-texts">
                          <p>
                            AlaDeen Gold Mobile App is a new way to own and trade gold and silver via a digital application built
                            to provide the most secure without any inconvenience of physical storage and security for gold and
                            silver. This app is designed with users’ satisfaction in mind, providing a safe and excellent trading
                            experience. This e-wallet is not only secured and user-friendly, but it is also in compliance with
                            Shariah Principle as it is certified by Shariah Advisory Panel.</p>
                          <br />
                          <p>
                            AlaDeen Gold Mobile App is developed using the latest technology that delivers the best user
                            experience. Using our technology, users can easily buy and sell gold and silver in just a few clicks.
                            With our mobile app, all purchases will be handled by our intelligent and secure backend system. We
                            also make it convenient for the users to redeem their purchased gold or save it in our highly secured
                            vault.
                          </p>
                        </div>
                      </div>
                      <div className="counter-area">
                        <div className="counter-box">
                          <img src="img/counter-bg1.png" className="responsive-img" alt="bg" />
                          <div className="count-content"><span className="counter">500</span>+</div>
                          <h5 className="count-text">Downloads</h5>
                        </div>
                        <div className="counter-box">
                          <img src="img/counter-bg1.png" className="responsive-img" alt="bg" />
                          <div className="count-content"><span className="counter">4.8</span></div>
                          <h5 className="count-text">Avg Rating</h5>
                        </div>
                        <div className="counter-box">
                          <img src="img/counter-bg1.png" className="responsive-img" alt="bg" />
                          <div className="count-content"><span className="counter">93</span></div>
                          <h5 className="count-text">Total Reviews</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="background-shape">
                <img src="img/home-3-hero-bg-effect.png" className="responsive-img" alt="bg" />
              </div>
            </section>
            {/* Work-Section */}
            <section id="how" className="section-wrapper-sm">
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <div className="section-heading center-align">
                      <h3>How it Works</h3>
                    </div>
                  </div>
                  <div className="col s6 m6 l3">
                    <div className="how-body-content wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="300ms">
                      <div className="how-body-icon">
                        <i className="fas fa-download"></i>
                      </div>
                      <div className="how-body-text">
                        <h5>Install App</h5>
                        <p>Download the app from Apple and Android store. It's free and always will be.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s6 m6 l3">
                    <div className="how-body-content wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="600ms">
                      <div className="how-body-icon">
                        <i className="fas fa-sign-in-alt"></i>
                      </div>
                      <div className="how-body-text">
                        <h5>Sign Up</h5>
                        <p>Register with your email and create your password to get a verification link sent to your email.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s6 m6 l3">
                    <div className="how-body-content md-m wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="900ms">
                      <div className="how-body-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="how-body-text">
                        <h5>Verify</h5>
                        <p>Enter your profile name and mobile number and wait for the OTP code to verify.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s6 m6 l3">
                    <div className="how-body-content md-m wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="1200ms">
                      <div className="how-body-icon">
                        <i className="fas fa-hand-holding-usd"></i>
                      </div>
                      <div className="how-body-text">
                        <h5>Use Gold Wallet</h5>
                        <p>You can then buy gold & silver after you have successfully registered with AlaDeen Gold.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Feature-Section */}
            <section id="feature" className="section-wrapper-sm">
              <div className="container">
                <div className="row">
                  <div className="col s12 m8 l7">
                    <div className="feature-right-content section-content-pt">
                      <div className="feature-content">
                        <div className="feature-heading section-heading">
                          <h3>Robust, Clean and Fast</h3>
                        </div>
                        <div className="feature-texts">
                          <div className="features-box wow fadeInUp">
                            <div className="single-features-text">
                              <h5>Real-time Update</h5>
                              <p>AalDeen Gold continuously updates you with the current gold and silver price. Our subscribers can get the latest info on the gold and silver price before buying them.</p>
                            </div>
                            <div className="features-img position-relative">
                              <img src='/img/update.png' alt="Icon 1" />
                            </div>
                          </div>
                          <div className="features-box ft-box wow fadeInRight">
                            <div className="single-features-text">
                              <h5>Safe & Secure</h5>
                              <p>Using AlaDeen Gold, our subscribers no need to worry about keeping their gold and silver with them. We provide a secure and safe vault for our subscribers to own physical gold and silver without physical storage and security inconvenience.</p>
                            </div>
                            <div className="features-img position-relative">
                              <img src="/img/secure.png" alt="Icon 2" />
                            </div>
                          </div>
                          <div className="features-box wow fadeInDown">
                            <div className="single-features-text">
                              <h5>Easy to Trade</h5>
                              <p>AlaDeen Gold has created the easiest way for people to trade and own physical gold and silver. Our subscribers can do gold and silver trading activities via mobile app without being a hassle to hold their gold and silver physically.</p>
                            </div>
                            <div className="features-img position-relative">
                              <img src="/img/click.png" alt="Icon 3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m4 l4 offset-l1">
                    <div className="feature-left-pic wow fadeInRight" data-wow-duration="2000ms" data-tilt>
                      <img className="responsive-img" src="img/AlaDeen Gold Wallet Login page-03.png"
                        alt="AlaDeen Gold App pic" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape">
                <img src="img/image-from-rawpixel-id-2-png.png" className="responsive-img" alt="bg" />
              </div>
            </section>
            {/* Video-Section */}
            <section id="video" className="section-wrapper-sm">
              <div className="container">
                <div className="row center-align">
                  <div className="col s12">
                    <div className="video-container wow fadeInUp" data-wow-duration="2000ms">
                      <iframe title='AlaDeenGoldVideo' width="100%" height="auto" src="https://www.youtube.com/embed/w30W8QC1cC4" frameBorder="0"
                        allowFullScreen />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <Screenshot-Section */}
            <section id="screen-shot" className="section-wrapper-sm">
              <div className="row">
                {/* <!--Screenshots left content/heading content--> */}
                <div className="col s12 m12 l4 wow slideInLeft" data-wow-duration="1500ms">
                  <div className="screenshot-left section-content-pt">
                    <div className="screen-shot-heading section-heading">
                      <h3>Sneak Peek At Our App Screenshots</h3>
                    </div>
                    <div className="sec-texts">
                      <p>Say hello to the all new screens where you can keep updated with the current gold and silver price to get the best price.</p>
                    </div>
                  </div>
                </div>
                {/* <!--Screenshots right content--> */}
                <div className="col s12 m12 l8">
                  <div className="screenshots-slider-wrapper">
                    <div className="screenshots-img owl-carousel owl-theme owl-loaded">
                      <div className="owl-stage-outer">
                        <div className="owl-stage">
                          <div className="owl-item">
                            <div className="item">
                              <div className="screenshot-box"><img src="/img/1-01.png" alt="" /></div>
                            </div>
                          </div>
                          <div className="owl-item">
                            <div className="item">
                              <div className="screenshot-box"><img src="/img/1-02.png" alt="" /></div>
                            </div>
                          </div>
                          <div className="owl-item">
                            <div className="item">
                              <div className="screenshot-box"><img src="/img/1-03.png" alt="" /></div>
                            </div>
                          </div>
                          <div className="owl-item">
                            <div className="item">
                              <div className="screenshot-box"><img src="/img/1-04.png" alt="" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape">
                <img src="/img/gold-bg.png" alt="bg" />
              </div>
            </section>
            {/* Testimonial-Section */}
            <section id="review" className="section-wrapper-sm">
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    {/* <!--section heading--> */}
                    <div className="section-heading center-align">
                      <h3 style={{ marginBottom: "20px" }}>Our Client's Review</h3>
                      <p>Goals are great, we all want gains and the positives that come along with them.</p>
                    </div>
                  </div>
                  {/* <!--review body--> */}
                  <div className="col s12">
                    <div className="testimonial-body">
                      <div className="review-content owl-carousel">
                        {/* <!--review box--> */}
                        <div className="review-box">
                          <span><i className="fas fa-quote-left"></i></span>
                          <p>
                            Very user-friendly app. I can buy gold and silver anywhere, anytime I want. I also dont have to keep the gold on my own.
                          </p>
                          <div className="review-box-author">
                            <div className="review-author-img"><img src="/img/Syukar.png" alt="Avatar" /></div>
                            <h6>Shukri</h6>
                          </div>
                        </div>
                        {/* <!--review box--> */}
                        <div className="review-box">
                          <span><i className="fas fa-quote-left"></i></span>
                          <p>
                            The app’s tremendous considering the fact that it renders gold & silver prices real time. Sturdy way to trade and cash-out the money through bank transfer.
                          </p>
                          <div className="review-box-author">
                            <div className="review-author-img"><img src="/img/naeem.png" alt="Avatar" /></div>
                            <h6>Naeem Ahsan</h6>
                          </div>
                        </div>
                        {/* <!--review box--> */}
                        <div className="review-box">
                          <span><i className="fas fa-quote-left"></i></span>
                          <p>
                            Awesome way for the customer to see gold price. Easy to do transactions, just a few clicks. Shariah-compliance, no riba’ in transaction.
                          </p>
                          <div className="review-box-author">
                            <div className="review-author-img"><img src="/img/Amir.png" alt="Avatar" /></div>
                            <h6>Amirul Omar</h6>
                          </div>
                        </div>
                        {/* <!--review box--> */}
                        <div className="review-box">
                          <span><i className="fas fa-quote-left"></i></span>
                          <p>
                            This apps is marvelous! We can buy, sell and transfer golds and silver from here. Moreover it's easy and secure & it is shariah compliance too!
                          </p>
                          <div className="review-box-author">
                            <div className="review-author-img"><img src="/img/sofea.jpeg" alt="Avatar" /></div>
                            <h6>Sofea Zaini</h6>
                          </div>
                        </div>
                        {/* <!--review box--> */}
                        <div className="review-box">
                          <span><i className="fas fa-quote-left"></i></span>
                          <p>
                            I bought my gold from this app! It is certified by Shariah Panel. It is really convenient and helpful as the interface is really user-friendly. Recommended!
                          </p>
                          <div className="review-box-author">
                            <div className="review-author-img"><img src="/img/WhatsApp Image 2021-09-24 at 12.49.21.jpeg" alt="Avatar" /></div>
                            <h6>Ahsan Ali Rashed</h6>
                          </div>
                        </div>
                        {/* <!--review box--> */}
                        <div className="review-box">
                          <span><i className="fas fa-quote-left"></i></span>
                          <p>
                            This is the best app that i have ever encountered! It's comprehensive, user friendly. I can withdraw the money anytime.
                          </p>
                          <div className="review-box-author">
                            <div className="review-author-img"><img src="/img/dayang.jpeg" alt="Avatar" /></div>
                            <h6>Dayang Nadhirah</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Faq-Section */}
            <section id="faq" className="section-wrapper-sm">
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    {/* <!--section heading--> */}
                    <div className="section-heading center-align">
                      <h3>Popular Questions &amp; Answers</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="faq-wrapper">
                    {/* <!--left side faq--> */}
                    <div className="col s12 m12 l6">
                      <div className="faq-left">
                        <ul className="collapsible">
                          <li className="active">
                            <div className="collapsible-header">
                              <h6>What is AlaDeen Gold</h6>
                            </div>
                            <div className="collapsible-body">AlaDeenGold is a new way to own and trade gold via a digital
                              application built to provide the most secure without any inconvenience of physical storage and
                              security for gold, represented with physical gold and is used as a value of exchange. These apps
                              were designed with users in mind, providing a safe and great trading experience.</div>
                          </li>
                          <li>
                            <div className="collapsible-header">
                              <h6>What happens after I register to open an AlaDeen Gold account?</h6>
                            </div>
                            <div className="collapsible-body">After you are successfully registered you will receive an email
                              verification from AlaDeen Gold. You will be required to follow the instructions in the email to
                              complete the registration. After you have completed the verification process, you will have access
                              to our application homepage where you will be able to subscribe and sell gold and/or silver based on
                              the current market price.</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!--right side faq--> */}
                    <div className="col s12 m12 l6">
                      <div className="faq-right">
                        <ul className="collapsible">
                          <li className="active">
                            <div className="collapsible-header">
                              <h6>What information do I need to provide to open an account?</h6>
                            </div>
                            <div className="collapsible-body">To open account subscribers will be asked to fill in some personal
                              details, and to create a one-time login and password. Subscribers are expected to keep this
                              information secure for safe transactions. Subscribers need to verify their account through
                              subscribers e-mail. In order to begin trading on the platform, we will require proof of identity
                              (i.e. a scanned copy of an official photo identification document such as a Driver’s License,
                              Passport, or National ID).</div>
                          </li>
                          <li>
                            <div className="collapsible-header">
                              <h6>How do I buy gold and/or silver in my account?</h6>
                            </div>
                            <div className="collapsible-body">To buy from AlaDeen Gold, please follow the steps below:
                              <ul className="faq-list">
                                <li>Login to your account at AlaDeen Gold App</li>
                                <li>Under the homepage tab, subscribers may select gold and/or silver</li>
                                <li>Subscribers later may select which unit to buy</li>
                                <li>For multiple orders, subscribers may use the different payment methods available in the app
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--bottom pdf--> */}
                <div className="col-12 center-align">
                  <div className="faq-pdf">
                    <a href="/documents/AlaDeen Gold - FAQs.pdf" target="_blank" className="theme-button"><i className="far fa-file-pdf"></i> Download
                      More FAQ in PDF</a>
                  </div>
                </div>
              </div>
              {/* <!--Animated Image--> */}
              <div className="bg-shape">
                <img src="/img/gold-bg-2.png" alt="bg" />
              </div>
            </section>
            {/* Download-Section */}
            <Download />
            {/* Footer-Section */}
            <Footer />
            {/* Back-To-Top */}
            <Backtop />
          </>
        );
    }
}