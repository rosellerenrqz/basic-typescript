class Todo {
  id: number;
  text: string;

  constructor(todoText: string) {
    this.id = Math.floor(Math.random() * 100) + 1;
    this.text = todoText;
  }
}

export default Todo;
