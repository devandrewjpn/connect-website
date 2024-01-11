/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import ModalVideo from "react-modal-video";

const IntroAbout = () => {
  const [isOpen, setOpen] = useState(false);
  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "Associados",
      subtitle: "Satisfeitos",
    },
    {
      id: 2,
      title: "5+",
      cardNo: "card-two",
      subtitle: "Filiais",
    },
    {
      id: 3,
      title: "100+",
      cardNo: "card-three",
      subtitle: "Veículos indenizados",
    },
  ];

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="rDYdeq3JW_E"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-xl-5 col-md-6 order-md-last">
          <div className="text-wrapper md-pb-70">
            <p className="tx-dark pt-30 pb-30 md-pb-15" data-aos="fade-up">
              Uma associação, perante o direito brasileiro, é uma organização
              <span className="fw-500"> sem fins lucrativos </span>
              onde pessoas se unem para chegar juntas a um propósito, de conquistas e benefícios para todos.
            </p>
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-up">
          <div className="img-holder d-lg-inline-flex position-relative zn2 pb-45 xl-pb-90">
            <img
              src={`https://agenciabrasildigital.com.br/projetos/connect/images/shape/shape_135.svg`}
              alt="shape"
              className="lazy-img"
            />
            <img
              width={561}
              height={732}
              src={`https://agenciabrasildigital.com.br/projetos/connect/images/about_img.jpg`}
              className="lazy-img avatar-img"
              alt="man"
            />

            {cardsData.map((item) => (
              <div
                className={`card-style ${item.cardNo} d-flex justify-content-center`}
                key={item.id}
              >
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-lg" />
                </div>
                <div className="ps-2 ps-lg-4">
                  <h3>{item.title}</h3>
                  <p className="fs-20 tx-dark m0">{item.subtitle}</p>
                </div>
              </div>
            ))}
            {/* /.card */}
          </div>
        </div>
        {/* End .col-xl-7 */}
      </div>
    </>
  );
};

export default IntroAbout;
