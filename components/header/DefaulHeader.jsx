import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight fixed`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="#hero" className="d-block">
              <img
                src={`/projetos/connect/images/logo/primary-logo.svg`}
                alt="logo"
                width={150}
              />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="https://kepler.hinova.com.br/sga/area/v5/auth/d88e237e387258c69e3134d6be53036ced9c767f923c0318eb62e1ca87ada2e4adf54de899a7c0643a8efd2710f71a6a42e99cba6f3635808e69f917c57ed55831bf77aa6b04def9a222268f4560bdac"
              target="_blank"
              className="login-btn-three rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link>
            <Link
              href="#contact"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
            >
              Contate nos!
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
