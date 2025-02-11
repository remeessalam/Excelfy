import ItodoImage from "../../../elements/itodo-img";

function WhyChooseUs() {
  return (
    <>
      <div className="section-full p-b30 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">Why Choose Us?</h2>
                    <p>
                      At Excelfy Technologies, we go beyond just providing
                      technology—we build innovative, scalable, and tailored
                      solutions designed to meet your unique business
                      challenges. Our team of experts works closely with you to
                      understand your vision, ensuring that every solution we
                      deliver drives efficiency, growth, and success in the
                      digital age.
                    </p>
                    <div className="row sx-about-icon-bx1-column">
                      <div className="col-lg-6 col-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-mouse" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              Custom IT Solutions
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-download" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              Expert IT Consulting
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 d-lg-flex d-none col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <ItodoImage src="images/about/p1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
