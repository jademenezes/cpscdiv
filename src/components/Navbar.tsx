const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-success navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid justify-content-center">
          <div className="navbar-nav">
            <a className="nav-link" href="">
              Início
            </a>

            <a className="nav-link" href="">
              Programação
            </a>

            <a className="nav-link" href="">
              Sobre
            </a>

            <a className="nav-link" href="">
              Organização
            </a>

            <a className="nav-link" href="">
              Inscrições
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
