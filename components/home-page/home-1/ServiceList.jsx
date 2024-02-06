/* eslint-disable @next/next/no-img-element */

const services = [
    {
        icon: "/projetos/connect/images/icon/roubo.svg",
        delayAnim: 0,
        title: "Roubo & Furto",
        description: "Indenização  100% do valor do veículo na Tabela Fipe (exceto veículos de leilão). É rápido e descomplicado.",
        id: 0,
    },
    {
        icon: "/projetos/connect/images/icon/terceiro.svg",
        delayAnim: 100,
        title: "Colisão a Terceiros",
        description: "A única que não cobra cota de participação para atendimento a Terceiros. Contrate sua proteção com as verbas de R$ 30.000,00, R$ 50.000,00, R$ 70.000,00 ou R$ 100.000,00.",
        id: 1,
    },
    {
        icon: "/projetos/connect/images/icon/alagamento.svg",
        delayAnim: 200,
        title: "Enchente e Fênomenos da Natureza",
        description: "Veículo protegido contra queda de arvore, alagamentos, chuva de granizo e demais danos causados pela natureza. ",
        id: 2,
    },
    {
        icon: "/projetos/connect/images/icon/perda_total.svg",
        delayAnim: 400,
        title: "Perda total",
        description: "Quando o valor do reparo for viável economicamente ou os danos comprometer a estrutura do veículo, será caracterizado a perda total. Indenização de 100% do valor do veículo na Tabela Fipe (exceto veículos de leilão).",
        id: 3,
    },
    {
        icon: "/projetos/connect/images/icon/reserva.svg",
        delayAnim: 500,
        title: "Carro Reserva",
        description: "Opções de 10 dias, 20 dias ou 30 dias.",
        id: 4,
    },
    {
        icon: "/projetos/connect/images/icon/vidros.svg",
        delayAnim: 600,
        title: "Vidros",
        description: "Caiu uma pedra no para-brisa, quebra do vidro lateral ou traseiro, bateu algum objeto nos faróis e lanternas causando danos? Esse benefício é exatamente para ocorrências dessa natureza.",
        id: 5,
    },
    {
        icon: "/projetos/connect/images/icon/guincho.svg",
        delayAnim: 700,
        title: "Assistência 24h",
        description: "A maior rede de assistência do Brasil, com mais de 10.000 prestadores cadastrados para atender aonde você estiver. Os serviços oferecidos são de assistência emergencial.",
        id: 6,
    },
    {
        icon: "/projetos/connect/images/icon/incendio.svg",
        delayAnim: 800,
        title: "Incêndio",
        description: "Seu veículo pegou fogo? Não se preocupe, pois oferecemos proteção contra de incêndio decorrente de colisão.",
        id: 7,
    },
    {
        icon: "/projetos/connect/images/icon/energia.svg",
        delayAnim: 800,
        title: "Energia Renovável",
        description: "",
        id: 8,
    },
    {
        icon: "/projetos/connect/images/icon/telemedicina.svg",
        delayAnim: 800,
        title: "Connect Saúde",
        description: "Com esse benefício você não precisa deslocar até UPA para ter um Clinico à sua disposição. Através da Telemedicina você terá acesso as consultas médicas 24 horas por dia, sem precisar sair de conforto da sua casa.",
        id: 9,
    },
    {
        icon: "/projetos/connect/images/icon/app.svg",
        delayAnim: 300,
        title: "APP - DMHO",
        description: "Benefício que garante indenização de R$ 10.000,00 ou R$ 50.000,00, por passageiro e condutor, em caso de Morte Acidental ou Invalidez.  E R$ 2.000,00 ou R$ 10.000,00 a título de Despesas Médicas, Hospitalares e Ontológicas decorrente da colisão.",
        id: 10,
    },
];

const ServiceList = () => {
    return (
        <>
            <div className="col-12">
                <div className="row__flex">
                {services.map((service, index) => (
                    <div key={index} className="card_product_list tran3s text-center position-relative mt-30">
                        <div>
                            <div className="icon mb-3">
                                <img src={service.icon} alt="" className="lazy-img m-auto" />
                            </div>
                            <h5 className="tx-dark">{service.title}</h5>
                        </div>
                        <div>
                            <p>{service.description}</p>
                            <a href="">Saiba mais</a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
};

export default ServiceList;
