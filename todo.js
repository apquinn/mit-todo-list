function Todo({ todo, index, remove, flip }) {
  function handle() {
    remove(index);
  }

  function flipStatusLocal() {
    flip(index);
  }

  const todoStatus = () => {
    if (todo.isCompleted)
      return (
        <span className="is-complete" onClick={flipStatusLocal}>
          X
        </span>
      );
    else
      return (
        <span className="is-not-complete" onClick={flipStatusLocal}>
          O
        </span>
      );
  };

  return (
    <>
      <div className="todo">
        {todoStatus()}
        {todo.text}
        <div className="remove-todo" onClick={handle}>
          (-)
        </div>
      </div>
    </>
  );
}
