const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_108.svg",
    title: "Missão",
    content:
      "Oferecer a melhor forma de proteger seu patrimônio, com qualidade, agilidade e eficiência, garantindo a melhor opção de socorro mútuo, para nossos associados.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_109.svg",
    title: "Visão",
    content:
      "Ser a principal referência de proteção veicular da região, reconhecida pela sociedade, colaboradores e fornecedores, ofertando sempre os melhores benefícios para os associados.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_110.svg",
    title: "Valores",
    content:
      "Ética, seriedade, transparência, compromisso, eficiência e respeito aos associados.",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
