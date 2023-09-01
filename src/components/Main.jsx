export default function Main() {
  const cursosData = [
    {
      id: 1,
      title: "Tecnico Administrativo",
      imageURL: "./img/tecnicoAd.png",
    },
    {
      id: 2,
      title: "Técnico en administracion de empresas",
      imageURL: "./img/tecadem.png",
    },
    {
      id: 3,
      title: "Coaching Financiero ",
      imageURL: "./img/cofinan.png",
    },
    {
      id: 4,
      title: "Técnico auxiliar en dictado de clases ",
      imageURL: "./img/tecaudic.png",
    },
    {
      id: 5,
      title: "Técnico avanzado en Office",
      imageURL: "./img/tecavanoff.png",
    },
    {
      id: 6,
      title: "Técnico Electrisista",
      imageURL: "./img/tecelec.png",
    },
  ];
  return (
    <>
      <div className="container mt-5 text-logo">
          <h3 className="text-light text-center display-5">Nuestros Cursos</h3>
        <div className="row justify-content-center ">
          {cursosData.map((curso) => (
            <div key={curso.id} className="col-12 col-md-4 col-lg-5 mb-4">
              <div className="card shad border-0 ">
                <img
                  src={curso.imageURL}
                  className="card-img-top border-0 "
                  alt={curso.title}
                />
                <div className="card-body second-color">
                  <h5 className="card-title">{curso.title}</h5>
                  <p className="card-text">{curso.description}</p>
                  <a href={`/curso/${curso.id}`} className="btn btn-dark">
                    Ver Detalles
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
