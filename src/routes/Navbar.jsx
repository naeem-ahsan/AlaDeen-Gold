import React from "react";

const Nav = () => {
    return (
        <div>
        <nav className="navigation z-depth-3">
    <div className="nav-wrapper">
      <div className="row">
        <div className="col s12">
          <a href="#particles-js" className="nav-name">AlaDeen Gold</a>
          <a href="#particles-js" className="nav-logo brand-logo center"><img src="img/AGCB-LOGO-4.png" className="responsive-img" alt="Company Logo"/></a>
          <a  href="/" data-target="mobile-demo" className="sidenav-trigger">{/* eslint-disable */}<i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=io.aladeen.trader"  className="waves-effect waves-light btn red lighten-1">Play Store</a></li>
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
        </div>
    );
}

export default Nav;