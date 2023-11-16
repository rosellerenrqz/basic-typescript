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
      className="mx-auto my-10 max-w-md rounded-md bg-white p-6 shadow-md"
    >
      <label htmlFor="todoText" className="mb-2 block text-xl font-medium">
        Text:
      </label>
      <input
        type="text"
        id="todoText"
        ref={InputRef}
        placeholder="Input Text"
        className="w-full rounded-md border-b p-2"
      />
      <button
        type="submit"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
