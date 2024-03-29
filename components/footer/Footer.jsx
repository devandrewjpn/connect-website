import React from "react";

const Footer = () => {

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "http://facebook.com/connect",
    },
    {
      iconClass: "fab fa-instagram",
      link: "http://instagram.com/connectprotecao",
    },
  ];

  return (
    <>

      <div className="col-12 text-center d-flex flex-column justify-content-center align-items-center mb-30">
        <img width={250} src={`/images/logo/white-logo.svg`} alt="" />
        <p className="text-white opacity-75 mb-5 mt-30">Raphael Hardy, 46, P. Eustáquio, BH/MG</p>
        <p className="text-white opacity-75 mb-5">31 - 3271-1073</p>
        <p className="text-white opacity-75 mb-10">contato@connect.org.br</p>
        <ul className="d-flex justify-content-center social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
