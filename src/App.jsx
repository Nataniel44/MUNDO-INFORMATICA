import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import RegistroForm from "./components/RegistroForm";
import Footer from "./components/Footer";
import Presentation from "./components/Presentation";

function App() {
  return (
    <>
      <Navbar />
      <div className="text-center bg-dark text-color text-logo  fondo d-flex justify-content-center">

        <div className="p-3 d-flex align-items-center">
          <div className="shadow first-color rounded p-2 ">
            <div>
              <h2 className="m-0 logo display-1 text-color ">ESTUDIA <br/> Y CRECE</h2>
              <div className="bg-dark rounded ps-3 pe-3 text-light">con los curos del imi</div>
              <div className="mt-3 text-center">
              <p className="m-0 text">&#x2705;+19 años de tayectoria.</p>
              <p className="m-0 text">&#x2705;+21 mil seguidores.</p>
              <p className="m-0 text">&#x2705;todas las modalidades.</p>
              <p className="m-0 text">&#x2705;diferentes edades.</p>
              <p className="m-0 text">&#x2705;Becas y descuentos <br /> exclusivos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-3 text-light">
        <div className="col-12 col-lg-6 h-100">
          <Presentation />
          <RegistroForm />
        </div>
        <div className="col-12 col-lg-6 text-dark " id="section">
          <Main />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
