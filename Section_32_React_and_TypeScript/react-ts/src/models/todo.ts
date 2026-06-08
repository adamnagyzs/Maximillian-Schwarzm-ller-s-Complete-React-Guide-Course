// with class
class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;

// with type or interface, both is the same
// export type Todo = {
//   id: string;
//   text: string;
// };

// export function createTodo(text: string): Todo {
//   return {
//     id: new Date().toISOString(),
//     text,
//   };
// }
