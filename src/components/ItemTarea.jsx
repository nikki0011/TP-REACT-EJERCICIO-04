const ItemTarea = ({textoTareaProps}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">{textoTareaProps} <button className="btn btn-danger rounded-5 fs-6">X</button>
    </li>
  );
};

export default ItemTarea;
