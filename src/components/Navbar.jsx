const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text" href="#">
            <img
              src="src/img/logo2.png"
              className="rounded-circle"
              width="50"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav text-logo">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
              <a className="nav-link active" href="#">
                Características
              </a>
              <a className="nav-link active" href="#">
                Precios
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
