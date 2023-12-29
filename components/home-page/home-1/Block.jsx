const Block = () => {
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <img
            src={`${process.env.setted_URL}/images/shape/shape_136.svg`}
            alt="shape"
            className="lazy-img d-none d-sm-inline-block"
          />
        </div>
        <div className="col-md-7 col-sm-8 wow fadeInDown">
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#04E63D" }}>10 mil+</h3>
            <p>Associados que confiam em nosso trabalho.</p>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7 wow fadeInDown">
          <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#050A30" }}>
              5.000+
            </h3>
            <p>Veículos protegidos na base.</p>
            <img
              src={`${process.env.setted_URL}/images/shape/shape_138.svg`}
              alt="sahpe"
              className="lazy-img shapes shape-one"
            />
          </div>
        </div>

        <div className="col-sm-5 wow fadeInUp">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#464646" }}>
              <span>Benefícios</span>
            </h3>
            <p>Os melhores benefícios do mercado.</p>
          </div>
          {/* /.block-wrapper */}
          <img
            src={`${process.env.setted_URL}/images/shape/shape_137.svg`}
            alt="shape"
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
          />
        </div>
      </div>
    </>
  );
};

export default Block;
