import "./App.css";
import InputTask from "./components/InputTask";
import AddTask from "./components/AddTask";
function App() {
  return (
    <div className="task">
      <InputTask />
      <AddTask />
    </div>
  );
}

export default App;
