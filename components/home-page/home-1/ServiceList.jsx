/* eslint-disable @next/next/no-img-element */

const services = [
    {
        icon: "images/icon/roubo.svg",
        delayAnim: 0,
        title: "Roubo & Furto",
        id: 0,
    },
    {
        icon: "images/icon/terceiro.svg",
        delayAnim: 100,
        title: "Colisão a Terceiros",
        id: 1,
    },
    {
        icon: "images/icon/alagamento.svg",
        delayAnim: 200,
        title: "Enchente ou Inundação",
        id: 2,
    },
    {
        icon: "images/icon/buracos.svg",
        delayAnim: 300,
        title: "Assistência a buracos",
        id: 3,
    },
    {
        icon: "images/icon/perda_total.svg",
        delayAnim: 400,
        title: "Perda total",
        id: 4,
    },
    {
        icon: "images/icon/reserva.svg",
        delayAnim: 500,
        title: "Carro Reserva",
        id: 5,
    },
    {
        icon: "images/icon/vidros.svg",
        delayAnim: 600,
        title: "Vidros",
        id: 6,
    },
    {
        icon: "images/icon/guincho.svg",
        delayAnim: 700,
        title: "Assistência 24h",
        id: 7,
    },
    {
        icon: "images/icon/incendio.svg",
        delayAnim: 800,
        title: "Incêndio",
        id: 8,
    },
];

const ServiceList = () => {
    return (
        <>
            <div className="col-lg-9">
                <div className="row__flex">
                {services.map((service, index) => (
                    <div key={index} className="card_product_list tran3s text-center position-relative mt-30">
                        <div className="icon mb-3">
                            <img src={service.icon} alt="" className="lazy-img m-auto" />
                        </div>
                        <h5 className="tx-dark">{service.title}</h5>
                        <a href="">Saiba mais</a>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
};

export default ServiceList;
