import Slider from "react-slick";

const Banner = () => {

  const testimonials = [
    {
      id: 1,
      nome: "Alex Barros",
      mensagem: "Este seguro e um dos melhores que já tive usei por 2 vezes . Resolveram rápido o terceiro ficou satisfeito que ate contratou eles vcs estão de parabéns em  atendimento suporte super indico."
    },
    {
      id: 2,
      nome: "Paulo César",
      mensagem: "Estou satisfeito com a connect precisei do reboque 2 vezes e fui bem atendido."
    },
    {
      id: 3,
      nome: "Silas Guilherme",
      mensagem: "Precisei da assistência 24 horas e fui bem atendimento e de forma rápida."
    },
    {
      id: 4,
      nome: "Pastor Ubayara Peres",
      mensagem: "Muito feliz pelo atendimento feito pela connect. Rapidez no atendimento."
    },
  ]

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <li key={i}>
        <i className="fa-solid fa-star" />
      </li>
    );
  }

  return (
    <>
      <div className="top-banner text-center position-relative">
        <img className="mx-auto" width={80} src="/projetos/connect/images/icon/google_negocio.png" alt="" />
        <h2 className="tx-dark mb-20">Melhores avaliações do mercado</h2>
        <Slider {...settings}>
          {testimonials.map(testimonial => {
            return (
              <div key={testimonial.id}>
                  <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20">
                    {testimonial.mensagem}
                  </p>
                  <strong>{testimonial.nome}</strong><br />
                  <div className="d-inline-flex align-items-center">
                    <ul className="d-flex style-none rating">{stars}</ul>
                    <div className="fs-20 ms-4">
                      <strong className="fw-500 tx-dark">5.0</strong>{" "}
                    </div>
                  </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
