const Footer = () => {
  return (
    <footer className="container-fluid d-flex">
      <p>Realização</p>
      <div className="d-flex flex-row align-items-center justify-content-center gap-5 mx-auto">
        <img
          className="footer-img img-fluid"
          src="src\assets\logoProex.png"
          alt="Logo Proex"
        />
        <img
          className="footer-img"
          src="src\assets\logoGepes.png"
          alt="Logo Gepesscrítico"
        />
        <img
          className="footer-img"
          src="src\assets\logoGeposs.jpg"
          alt="Logo Geposs"
        />
        <img
          className="footer-img"
          src="src\assets\logoServicoSocial.png"
          alt="Logo do curso de Serviço Social"
        />
      </div>
    </footer>
  );
};

export default Footer;
