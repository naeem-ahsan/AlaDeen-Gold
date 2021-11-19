import React from "react";

const Download = () => {
    return (
        <>
        <section id="download" className="section-wrapper-sm">
              <div className="container">
                <div className="row">
                  {/* <!--heading--> */}
                  <div className="s12 m12 l12 center-align">
                    <div className="section-heading center-align">
                      <h3 style={{ marginBottom: "20px" }}>Your Financial Goals. In One App..!</h3>
                      <p>Download the AlaDeen Gold and subscribe for free and a win a lucky draw!</p>
                    </div>
                  </div>
                  {/* <!--download body--> */}
                  {/* <!--apple store--> */}
                  <div className="col s12 m6 l3 offset-l3">
                    <div className="download-content">
                      <div className="apple-store">
                        <a rel='noreferrer' href="https://apps.apple.com/my/app/aladeen-gold-wallet/id1573265523" target="_blank"><img
                          src="/img/apple-store.jpg" className="responsive-img" alt="apple store" /></a>
                      </div>
                    </div>
                  </div>
                  {/* <!--google store--> */}
                  <div className="col s12 m6 l3 ">
                    <div className="download-content sd-m">
                      <div className="google-store">
                        <a rel='noreferrer' href="https://play.google.com/store/apps/details?id=io.aladeen.trader" target="_blank"><img
                          src="/img/google-store.jpg" className="responsive-img" alt="google log" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Animated Image--> */}
              <div className="bg-shape">
                <img src="/img/image-from-rawpixel-id-3-png.png" alt="bg" />
              </div>
            </section>
        </>
    );
}

export default Download;