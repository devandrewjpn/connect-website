/* eslint-disable @next/next/no-img-element */

const Feature = () => {
  const features = [
    {
      background: "#fffee7",
      title: (
        <>
          Proteção Completa.
        </>
      ),
      description: "Todas as proteções que precisa.",
      icon: "https://agenciabrasildigital.com.br/projetos/connect/images/icon/icon_car.svg",
      width: "120",
      height: "165",
      delay: "100",
    },
    {
      background: "#FBF1FF",
      title: (
        <>
          Rastreamento.
        </>
      ),
      width: "120",
      height: "170",
      description: "Rastreamento total do seu bem.",
      icon: "https://agenciabrasildigital.com.br/projetos/connect/images/icon/icon_location.svg",
      delay: "200",
    },
    {
      background: "#EEFBFA",
      title: (
        <>
          Assistência Completa.
        </>
      ),
      width: "120",
      height: "169",
      description: "Assistências escolhidas para o seu conforto.",
      icon: "https://agenciabrasildigital.com.br/projetos/connect/images/icon/icon_tools.svg",
      delay: "300",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <img
              width={feature.width}
              height={feature.height}
              src={feature.icon}
              alt="icon"
              className="position-absolute"
            />
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
