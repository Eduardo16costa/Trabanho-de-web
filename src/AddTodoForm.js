export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange
}) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <h2>Adicionar nota</h2>
      <label htmlFor="todo">Criar nota: </label>
      <input
        name="todo"
        type="text"
        placeholder="Crie uma nova nota"
        value={todo}
        onChange={onAddInputChange}
      />
    </form>
  );
}
