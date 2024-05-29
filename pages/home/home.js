import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import Banner from "../../components/home-page/home-1/Banner";
import Block from "../../components/home-page/home-1/Block";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import Feature from "../../components/home-page/home-1/Feature";
import Hero from "../../components/home-page/home-1/Hero";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import PromoHero from "../../components/home-page/home-1/PromoHero";
import WhyChoose from "../../components/home-page/home-1/WhyChoose";
import Service from "../../components/home-page/home-1/Service";
import ServiceList from "../../components/home-page/home-1/ServiceList";
import { ToastContainer } from 'react-toastify';
import { HomeVideoFeedback } from "../../components/home_video_feedback";
import { GalleryItemVideo } from "../../components/gallery_item_video";
import SmartphoneFeedback from "../../components/home-page/home-1/SmartphoneFeedback";

const Home = () => {

  const items = [
    {
      id: 1,
      type: 'video',
      link: '/gallery/alex.mp4'
    },
    {
      id: 2,
      type: 'video',
      link: '/gallery/jose.mp4'
    },
    {
      id: 3,
      type: 'image',
      link: '/gallery/mathias.mp4'
    },
    {
      id: 4,
      type: 'image',
      link: '/gallery/walmir.mp4'
    },
  ]

  return (
    <>
      <ToastContainer />
      <Seo pageTitle="Início" />
      <DefaulHeader />
      <Hero />
      <PromoHero />
      <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-8">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    Por que escolher a Connect?
                  </h2>
                  <p>Somos a maior
                    startup associativa do Brasil</p>
                </div>
              </div>
            </div>
            <div className="row">
              <Service />
            </div>
          </div>
        </div>
      </div>

      <div id="benefits" className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-8">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    Com a Connect você tem cobertura em casos de:
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <ServiceList />
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
        <div className="avaliacoes__promo position-relative" data-aos="fade-up">
          <div className="reclame__aqui"><img src="/images/reclame_aqui.png" alt="" /></div>
          <div className="container">
            <Banner />
          </div>
        </div>


        <div id="feedback_comments" className="fancy-feature-thirtySeven mt-225 lg-mt-120">
          <div className="container">
            <div className="row">
              <div className="title-style-one mb-40">
                <div className="sc-title text-uppercase">Quem é Connect, está protegido.</div>
                <h2 className="main-title fw-500 tx-dark mb-5">
                  O que nossos associados dizem sobre nós
                </h2>
                <HomeVideoFeedback />
              </div>
            </div>
          </div>
        </div>

        <div className="smartphonefeedbackbox container" style={{paddingTop: "6rem"}}>
          <SmartphoneFeedback />
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
            <div className="title-style-one mb-40">
              <div className="sc-title text-uppercase">Clube de benefícios</div>
              <h2 className="main-title fw-500 tx-dark mb-5">
                Clube Connect
              </h2>
              <img src="/images/clube_connect.webp" />
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
                        src={`/images/icon/icon_114.svg`}
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
              src={`/images/shape/shape_90.svg`}
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <img
              src={`/images/shape/shape_91.svg`}
              alt="shape"
              className="lazy-img shapes shape-two"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.126096424556!2d-43.98649368860356!3d-19.919090437892788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa696e19ed18fdf%3A0xc183ead7241dc999!2sR.%20Prof.%20Raphael%20Hardy%2C%2046%20-%20Padre%20Eust%C3%A1quio%2C%20Belo%20Horizonte%20-%20MG%2C%2030730-080!5e0!3m2!1spt-BR!2sbr!4v1704909961104!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}

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
          src={`/images/assets/ils_13.png`}
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src={`/images/assets/ils_14.png`}
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
    </>
  );
};

export default Home;
