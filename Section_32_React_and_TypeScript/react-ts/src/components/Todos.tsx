import Todo from "../models/todo";

type TodosProps = {
  items: Todo[];
};

const Todos = ({ items }: TodosProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
