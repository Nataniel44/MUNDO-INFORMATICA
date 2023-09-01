const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contacto</h5>
            <p>Dirección: San Vicente, Mnes. <br />Av. Constitución y Roldán 1090, Local 7</p>
            <p>Teléfono: 3755 636325</p>
            <p>Email: insitutomundoinformatica@gmail.com</p>
          </div>
          <div className="col-md-6">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        &copy; {new Date().getFullYear()} Mundo Informática. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
