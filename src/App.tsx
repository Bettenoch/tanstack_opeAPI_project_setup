import "./App.css";
import Todo from "./components/Todo";


function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-slate-300">
        <h1 className="text-4xl font-bold mt-6">Todo Application</h1>
          <Todo/>
      </div>
    </>
  );
}

export default App;
