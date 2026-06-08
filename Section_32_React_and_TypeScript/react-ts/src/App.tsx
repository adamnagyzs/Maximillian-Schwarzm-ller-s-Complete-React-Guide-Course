import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // with class
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  // with type
  //   const todos = [
  //   createTodo("Learn React"),
  //   createTodo("Learn TypeScript"),
  // ];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
