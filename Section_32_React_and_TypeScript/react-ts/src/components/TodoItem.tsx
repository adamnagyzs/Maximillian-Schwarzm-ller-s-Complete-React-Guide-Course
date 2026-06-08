type TodoListProps = {
  text: string;
};

const TodoItem = ({ text }: TodoListProps) => {
  return <li>{text}</li>;
};

export default TodoItem;
