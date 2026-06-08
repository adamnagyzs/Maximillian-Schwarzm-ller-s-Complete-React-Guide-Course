import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type TodosProps = {
  items: Todo[];
};

const Todos = ({ items }: TodosProps) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
