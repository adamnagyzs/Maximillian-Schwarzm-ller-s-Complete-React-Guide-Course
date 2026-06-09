import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

type TodosProps = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
};

const Todos = ({ items, onRemoveTodo }: TodosProps) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
