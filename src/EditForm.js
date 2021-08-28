export default function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2>Editar Nota</h2>
      <label htmlFor="updateTodo">Atualizar nota: </label>
      <input
        name="updateTodo"
        type="text"
        placeholder="Atualizar nota"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />
      <button type="submit" onClick={onEditFormSubmit}>
        Update
      </button>
      <button onClick={() => setIsEditing(false)}>Cancelar</button>
    </form>
  );
}
