const TodoItem: React.FC<{ text: string }> = (props) => {
  return (
    <>
      <li className="text-center">{props.text}</li>
    </>
  );
};

export default TodoItem;
