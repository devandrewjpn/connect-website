/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero1 = () => {

  return (
    <div id="hero" className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-10 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            {/* <div className="d-flex align-items-baseline gap-2 justify-content-center">
              <img width={20} src="/images/logosusep.svg" alt="" />
              <strong style={{color:'#028134'}}>Autorizado pela SUSEP.</strong>
            </div> */}
            <h1 className="hero-heading fw-500 tx-dark">
              Proteção do<span className="tx-white"> seu</span> jeito.
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Segurança e credibilidade para o seu bem.
            </p>
            <a className="main_hero_button" href="https://connectprotecaointeligente.com.br/cotacao/" target="_blank">Fazer simulação 👉</a>
            <div>
              <div className="approval-info d-inline-flex align-items-center mt-5 lg-mt-80"></div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <img
        width={487}
        height={649}
        id="heroleftimg"
        src={`/images/assets/ils_11.png`}
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
      />
      <img
        width={537}
        height={658}
        id="herorightimg"
        src={`/images/assets/ils_12.png`}
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
      />
    </div>
  );
};

export default Hero1;
