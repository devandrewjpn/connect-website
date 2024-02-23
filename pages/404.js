import Link from "next/link";
import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";

const Pricing = () => {
  return (
    <>
      <Seo pageTitle="404" />
      <DefaulHeader />

      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3>Opps! talvez esteja no lugar errado..</h3>
              <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">Entre em contato com os responsáveis caso precise de suporte técnico!</p>
              <Link href="/" className="btn-twentyOne fw-500 tran3s">
                Voltar para a home.
              </Link>
            </div>
          </div>
          <img
            width={800}
            height={522}
            src={`/images/assets/ils_06.svg`}
            alt=""
            className="m-auto"
          />
        </div>
        {/* End .container */}

        <img
          width={1915}
          height={674}
          src={`/images/shape/shape_178.svg`}
          alt="shape"
          className="shapes shape-one w-100"
        />
      </div>
      {/* /.error-page-content */}
    </>
  );
};

export default Pricing;
