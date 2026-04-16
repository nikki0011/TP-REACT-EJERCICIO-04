import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="container my-3">
        <h1 className="text-center">Lista de Tareas</h1>
        <FormularioTarea></FormularioTarea>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
