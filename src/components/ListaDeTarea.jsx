import ItemTarea from "./ItemTarea";

const ListaDeTarea = ({ arrayTareasProps }) => {
  return (
    <ul className="list-group">
      {arrayTareasProps.map((textoTarea, index) => (
        <ItemTarea key={index} textoTareaProps ={textoTarea}></ItemTarea>
      ))}
    </ul>
  );
};

export default ListaDeTarea;
