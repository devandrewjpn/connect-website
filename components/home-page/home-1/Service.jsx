/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const services = [
  {
    icon: "/projetos/connect/images/icon/icon_hand.svg",
    title: "Descomplicado",
    description: "Economia de até 30% em comparação com os valores do mercado. Faça uma simulação pelo celular e esteja protegido em poucos minutos.",
    delayAnim: 0,
  },
  {
    icon: "/projetos/connect/images/icon/precisa.svg",
    title: "Coberturas que você precisa",
    description: "Personalize todas as assistências que você irá necessitar e com condições que cabem no seu bolso. Adicione ou remova serviços de acordo com necessidade.",
    delayAnim: 100,
  },
  {
    icon: "/projetos/connect/images/icon/pagamento_facilitado.svg",
    title: "Pagamento Facilitado",
    description: "Você receberá um boleto mensalmente para manter sua cota ativa e manter seu veículo protegido.",
    delayAnim: 200,
  },
  {
    icon: "/projetos/connect/images/icon/burocracia.svg",
    title: "100% digital sem burocracia",
    description: "Tudo é feito no digital: contrato, atendimento, solicitação de assistência e etc.",
    delayAnim: 300,
  },
];

const Service = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-xl-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={service.delayAnim}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-30">
            <div className="icon mb-3">
              <img src={service.icon} alt="" className="lazy-img m-auto" />
            </div>
            <h4 className="tx-dark">{service.title}</h4>
            <p className="fs-10 m0 pt-20">{service.description}</p>
            <Link
              href="/pages-menu/service-details"
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>{" "}
        </div>
      ))}
    </>
  );
};

export default Service;
