export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
  return (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => onEditClick(todo)}>Editar</button>
      <button onClick={() => onDeleteClick(todo.id)}>Deletar</button>
    </li>
  );
}
