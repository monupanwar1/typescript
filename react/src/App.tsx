interface TodoType {
  title: string;
  description: string;
  done: boolean;
}




const App = () => {

  const todo:TodoType = {
    title: "Learn TypeScript",
    description: "Understand interfaces and props in React.",
    done: false,
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <h1>{todo.description}</h1>
      <p>{todo.done ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default App;
