import classes from "./TodoItem.module.css";

type TodoListProps = {
  id: string;
  text: string;
  onRemoveTodo: (id: string) => void;
};

const TodoItem = ({ id, text, onRemoveTodo }: TodoListProps) => {
  return (
    <li className={classes.item} onClick={() => onRemoveTodo(id)}>
      {text}
    </li>
  );
};

export default TodoItem;
