import classes from "./TodoItem.module.css";

type TodoListProps = {
  text: string;
};

const TodoItem = ({ text }: TodoListProps) => {
  return <li className={classes.item}>{text}</li>;
};

export default TodoItem;
