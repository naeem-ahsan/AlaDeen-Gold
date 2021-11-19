import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer">
          {/* <!--footer upper wrapper--> */}
          <div className="footer-wrap">
            <div className="container">
              <div className="row">
                {/* <!--content 1--> */}
                <div className="col s12 m6 l3">
                  <div className="footer-content">
                    <h5 className="white-text footer-head"><i className="material-icons">work</i> Corporate Office</h5>
                    <ul>
                      <li><a rel="noreferrer" href="https://goo.gl/maps/b4sj4nfm9N15Yxsm9" target={"_blank"}>Suite 11, 12 & 13,
                        Level 2,<br />
                        Resource Centre,<br />
                        Technology Park Malaysia,<br />
                        57000 Bukit Jalil,
                        Kuala Lumpur, Malaysia.</a></li>
                    </ul>
                  </div>
                </div>
                {/* <!--content 2--> */}
                <div className="col s12 m6 l3">
                  <div className="footer-content sd-m">
                    <h5 className="white-text footer-head"><i className="material-icons">contacts</i> Contact Us</h5>
                    <ul>
                      <li><a href="tel:+60389923061">+603-8992-3061</a></li>
                      <li><a href="tel:+603-8992-3062">+603-8992-3062</a></li>
                      <li><a href="tel:+6011-1133-5693">+6011-1133-5693</a></li>
                      <li><a href="mailto:Info@Al-EbreizGlobal.com">Info@Al-EbreizGlobal.com</a></li>
                    </ul>
                  </div>
                </div>
                {/* <!--content 3--> */}
                <div className="col s12 m6 l3">
                  <div className="footer-content md-m">
                    <h5 className="white-text footer-head"><i className="material-icons">apps</i> Social Links</h5>
                    <ul>
                      <li><a rel="noreferrer" href="https://www.instagram.com/al.ebreiz.global.capital/" target="_blank"><i className="fab fa-instagram-square"></i> Instagram</a></li>
                      <li><a rel="noreferrer" href="https://www.facebook.com/Al.Ebreiz.Global.Capital.Berhad" target="_blank"><i className="fab fa-facebook-square"></i> Facebook</a></li>
                      <li><a rel="noreferrer" href="https://www.youtube.com/channel/UCyeEMWN-puUJvMorjyb_DvA" target="_blank"><i className="fab fa-youtube"></i> YouTube</a></li>
                      <li><a rel="noreferrer" href="https://www.linkedin.com/company/al-ebriez-global-capital-berhad/" target="_blank"><i className="fab fa-linkedin"></i> Linkedin</a></li>
                    </ul>
                  </div>
                </div>
                {/* <!--content 4--> */}
                <div className="col s12 m6 l3">
                  <div className="footer-content md-m">
                    <h5 className="white-text footer-head"><i className="material-icons">description</i> Learn More</h5>
                    <ul>
                      <li><Link to='/Terms'>Terms & Conditions</Link></li>
                      <li><Link to='/Privacy'>Privacy Policy</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--footer bottom wrapper--> */}
          <div className="container">
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="footer-copyright">
                  <img src="/img/AGCB-LOGO-4.png" className="responsive-img" alt="Company Logo" />
                  <h6>© 2021 Copyright by <a rel="noreferrer" href="https://www.al-ebreizglobal.com/" target="_blank">Al Ebreiz Global Capital
                    Berhad.</a></h6>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}