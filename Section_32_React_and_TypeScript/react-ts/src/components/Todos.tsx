import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

type TodosProps = {
  items: Todo[];
};

const Todos = ({ items }: TodosProps) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
