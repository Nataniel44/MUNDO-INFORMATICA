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
      <div className="text-center bg-dark text-primary text-logo vh-50 fondo d-flex justify-content-center">
        <div className="p-3 d-flex align-items-center">
          <div className="border-2 border border-dark bg-black bg-opacity-75 rounded p-2">
            <div>
              <img
                src="src/img/logo1.jpg"
                width="150px"
                alt=""
                className="rounded-circle img-fluid"
              />
            </div>
            <div>
              <h1 className="m-0 text">Mundo Informatica</h1>
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
