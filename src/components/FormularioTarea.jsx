import { useState } from "react";
import ListaDeTarea from "./ListaDeTarea";

const FormularioTarea = () => {
  const [arrayTareas, setArrayaTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const tareaBuscada = arrayTareas.find(
      (itemTarea) => itemTarea.toLowerCase() === tarea.toLowerCase().trim(),
    );
    if (tareaBuscada) {
      return alert("la tarea ya existe");
    }

    setArrayaTareas([...arrayTareas, tarea.toLowerCase().trim()]);

    setTarea("");
  };

  const borrarTarea = (nombreTarea)=>{
    const arrayFiltrado = arrayTareas.filter((itemTarea)=> itemTarea !== nombreTarea)

    setArrayaTareas(arrayFiltrado)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex ">
          <input
            type="text"
            className="form-control"
            id="inputTarea"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
      <ListaDeTarea arrayTareasProps= {arrayTareas} borrarTareaProps ={borrarTarea}></ListaDeTarea>
    </section>
  );
};

export default FormularioTarea;
