import ListaDeTareas from "./ListaDeTareas";

const FormularioTarea = () => {
  return (
    <section>
      <form>
        <div className="mb-3 d-flex ">
          <input
            type="text"
            className="form-control"
            id="inputTarea"
            placeholder="Ingresa una tarea"
          />
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
      <ListaDeTareas></ListaDeTareas>
    </section>
  );
};

export default FormularioTarea;
