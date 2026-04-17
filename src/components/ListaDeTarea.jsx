import ItemTarea from "./ItemTarea";

const ListaDeTarea = ({ arrayTareasProps }) => {
  return (
    <ul className="list-group">
      {arrayTareasProps.map(() => (
        <ItemTarea></ItemTarea>
      ))}
    </ul>
  );
};

export default ListaDeTarea;
