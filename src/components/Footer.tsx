const Footer = () => {
  return (
    <footer className="container-fluid border border-secondary d-flex">
      <p>Realização</p>
      <div className="d-flex flex-row align-items-center justify-content-center gap-5 mx-auto border border-success">
        <img
          className="footer-img img-fluid border border-success"
          src="src\assets\logoProex.png"
          alt="Logo Proex"
        />
        <img
          className="footer-img border border-success"
          src="src\assets\logoGepes.png"
          alt="Logo Gepesscrítico"
        />
        <img
          className="footer-img border border-success"
          src="src\assets\logoGeposs.jpg"
          alt="Logo Geposs"
        />
        <img
          className="footer-img border border-success"
          src="src\assets\logoServicoSocial.png"
          alt="Logo do curso de Serviço Social"
        />
      </div>
    </footer>
  );
};

export default Footer;
