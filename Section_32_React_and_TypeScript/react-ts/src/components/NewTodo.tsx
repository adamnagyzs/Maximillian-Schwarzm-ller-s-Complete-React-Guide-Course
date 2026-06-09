import type { FormEvent } from "react";
import { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    onAddTodo(enteredText);
    todoTextInputRef.current!.value = "";
    todoTextInputRef.current!.focus();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
