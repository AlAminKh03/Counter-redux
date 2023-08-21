import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="max-w-screen max-h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;