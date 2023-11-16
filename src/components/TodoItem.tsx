const TodoItem: React.FC<{ text: string }> = (props) => {
  return (
    <>
      <li className="mx-auto mb-5 w-[40%] rounded-md bg-yellow-50 px-4 py-2 text-center text-lg shadow-md">
        {props.text}
      </li>
    </>
  );
};

export default TodoItem;
