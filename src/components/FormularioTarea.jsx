import { useState } from "react";
import ListaDeTarea from "./ListaDeTarea";

const FormularioTarea = () => {
  const [arrayTareas, setArrayaTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setArrayaTareas([...arrayTareas, tarea]);
  };

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
      <ListaDeTarea></ListaDeTarea>
    </section>
  );
};

export default FormularioTarea;
