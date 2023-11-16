import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const InputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = InputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
    InputRef.current!.value = "";
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center justify-center gap-5 bg-gray-100 p-5"
    >
      <label className="text-xl font-medium">Text:</label>
      <input type="text" name="" id="" ref={InputRef} className="p-1" />
      <button className="bg-blue-400 p-2 text-white">Add Todo</button>
    </form>
  );
};

export default NewTodo;
