import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Productos from "./components/Productos";
import Inicio from "./components/Inicio";
import Detalle from "./components/Detalle";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Descuentos from "./components/Descuentos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<Detalle />} />
          <Route path="/descuentos" element={<Descuentos />} />
          <Route path="/descuentos/:id" element={<Descuentos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
