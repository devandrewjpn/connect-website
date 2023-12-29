import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import Banner from "../../components/home-page/home-1/Banner";
import Block from "../../components/home-page/home-1/Block";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import Feature from "../../components/home-page/home-1/Feature";
import Hero from "../../components/home-page/home-1/Hero";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import WhyChoose from "../../components/home-page/home-1/WhyChoose";

const Insurance = () => {
  return (
    <>
      <Seo pageTitle="Início" />
      <DefaulHeader />
      <Hero />

      <div id="benefits" className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">
            <Feature />
          </div>
        </div>
      </div>

      <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
        <div className="container" data-aos="fade-up">
          <Banner />
        </div>

        <div id="about" className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout />
          </div>
        </div>
      </div>

      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <div className="sc-title text-uppercase">Por que nos escolher</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    Uma associação de princípios.
                  </h2>
                </div>
                <WhyChoose />
              </div>
            </div>

            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
      </div>

      <div
      id="contact"
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <img
                        src={`${process.env.setted_URL}/images/icon/icon_114.svg`}
                        alt="icon"
                        className="lazy-img mb-30"
                      />
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Fale conosco e esteja sempre um passo à frente.
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                        Nossa equipe esta preparada para atende-lo(a).
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-two md-mb-40">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
              Preencha o <br />
              formulário
            </div>
            <img
              src={`${process.env.setted_URL}/images/shape/shape_90.svg`}
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <img
              src={`${process.env.setted_URL}/images/shape/shape_91.svg`}
              alt="shape"
              className="lazy-img shapes shape-two"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>

      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <Footer />
              <p className="text-white text-center opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                  Connect Proteção Veícular.
                </p>
            </div>
          </div>
        </div>

        <img
          src={`${process.env.setted_URL}/images/assets/ils_13.png`}
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src={`${process.env.setted_URL}/images/assets/ils_14.png`}
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
    </>
  );
};

export default Insurance;
