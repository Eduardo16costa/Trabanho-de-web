import { useEffect, useState } from "react";
import TodoItem from "./TodoItem"; // importa o componente TodoItem
import AddTodoForm from "./AddTodoForm"; // importa o componente AddTodoForm
import EditForm from "./EditForm"; // importa o componente EditForm
import "./styles.css"; // importa a folha de estilos

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos"); // carrega as notas/lembretes apartir do localstorage
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  // define os estados iniciais da aplicação
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  // carregar todas as notas, escutando por mudanças no banco de dados(local storage)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // adicionar nota
  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }
  // edita nota
  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }
  // adicionar nota botão evento
  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }
  // funcão que dispara ao clickar em editar evento
  function handleEditFormSubmit(e) {
    // evita que o navegador recarregue a pagina
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  // funcão que dispara ao clickar em deletar
  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }
  // // funcão que dispara ao clickar em atualizar
  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }
  // funcão que dispara ao clickar em editar
  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="App">
      {/* condição para mostrar os formulários */}
      {/* link para a doc https://pt-br.reactjs.org/docs/conditional-rendering.html */}
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <ul className="todo-list">
        {/* itera nas lista de notas/lembretes */}
        {/* map é uma função do ArrayList */}
        {/* link para a doc https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}
