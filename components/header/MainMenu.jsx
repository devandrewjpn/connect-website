import Link from "next/link";

const MainMenu = () => {

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src={`/images/logo/primary-logo.svg`} alt="" width={150} />
              </Link>
            </div>
          </li>

          <li
            className="nav-item"
          >
            <Link href="/" role="button" className="nav-link">
              Início
            </Link>
          </li>

          <li
            className="nav-item"
          >
            <Link href="/#benefits" role="button" className="nav-link">
              Benefícios
            </Link>
          </li>

          <li
            className="nav-item"
          >
            <Link href="/#about" role="button" className="nav-link">
              Sobre
            </Link>
          </li>

          <li
            className="nav-item"
          >
            <Link href="/licenciado" role="button" className="nav-link">
              Área do licenciado
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default MainMenu;
