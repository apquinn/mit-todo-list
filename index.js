function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch",
      isCompleted: true,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  const flipStatus = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted) newTodos[index].isCompleted = false;
    else newTodos[index].isCompleted = true;
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo
            key={i}
            index={i}
            todo={todo}
            remove={removeTodo}
            flip={flipStatus}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
