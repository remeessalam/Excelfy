import ItodoImage from "../../../elements/itodo-img";

function SectionAboutCompany() {
  return (
    <>
      <div className="section-full m-t110 p-b50 bg-white sx-about-bx3-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx3-content-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="sx-about-bx3-media">
                    <div className="sx-dot-bx1">
                      <ItodoImage
                        src="images/about/dotted-pic2.png"
                        alt="image"
                      />
                    </div>
                    <div className="sx-dot-bx2">
                      <ItodoImage
                        src="images/about/dotted-pic2.png"
                        alt="image"
                      />
                    </div>
                    <div className="sx-ab3-img-outer">
                      <div className="sx-ab3-media">
                        <ItodoImage
                          src="images/about/p2.jpg"
                          alt="media"
                          className="w-100 h-100 rounded"
                        />
                      </div>
                    </div>
                    <div className="sx-ab-circle-box">
                      <div className="sx-ab-circle-box-content">
                        <span className="sx-exp">3+ Years Experience</span>
                        <div className="sx-exp-title-outer">
                          <span className="sx-exp-title-1">IT</span>
                          <span className="sx-exp-title-2">Solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="sx-about-bx3-content">
                    <h2 className="sx-title">
                      Welcome to Excelfy Technologies
                    </h2>
                    <p>
                      At Excelfy Technologies, we harness cutting-edge
                      technology to create intelligent solutions that drive
                      business transformation. Our team of dedicated
                      professionals partners with you to design and implement
                      strategies that enhance efficiency, innovation, and
                      scalability in an ever-evolving digital world.
                    </p>
                    <div className="row sx-about-icon-bx3-column">
                      <div className="col-lg-5 col-md-6">
                        <div className="sx-icon-bx-3">
                          <div className="sx-media">
                            <i className="flaticon-incoming-call" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title-info">
                              Contact Phone
                            </span>
                            <span className="sx-icon-bx-title">
                              [Your Contact Number]
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="sx-icon-bx-3">
                          <div className="sx-media">
                            <i className="flaticon-email-1" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title-info">
                              Contact Mail
                            </span>
                            <span className="sx-icon-bx-title">
                              [Your Contact Email]
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hilite-title text-left p-l50 text-uppercase">
              <strong>About Us</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionAboutCompany;
