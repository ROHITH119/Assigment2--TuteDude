import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="bg-zinc-800 h-dvh w-dvw">
      <div className="bg-zinc-300 h-1/5 flex justify-center align-center gap-x-2">
        <input
          type="text"
          placeholder="add task"
          className="border border-zinc-800 border-2 size-fit self-center p-2 rounded-lg text-black"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (task.trim() !== "") {
                setTodos([
                  ...todos,
                  { id: Date.now(), text: task, completed: false },
                ]);
                setTask(""); // ✅ clear input after adding
              } else {
                alert("Please enter a task!");
              }
            }
          }}
        ></input>
        <button
          className="size-fit self-center"
          onClick={() => {
            if (task.trim() !== "") {
              setTodos([
                ...todos,
                { id: Date.now(), text: task, completed: false },
              ]);
              setTask(""); // ✅ clear input after adding
            } else {
              alert("Please enter a task!");
            }
          }}
        >
          Add
        </button>
      </div>

      <div className="flex justify-around gap-50 pt-10">
        <div className="text-white">
          <span className="text-xl text-red-500 font-serif font-bold">
            Todo Tasks
          </span>
          {todos.map((item, id) => {
            if (!item.completed) {
              return (
                <div
                  key={id}
                  className="flex gap-4 my-10 bg-red-700 p-4 rounded-2xl min-w-100"
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onClick={() => {
                      toggleComplete(item.id);
                    }}
                    className=""
                  ></input>
                  <p className="text-lg">{item.text}</p>
                </div>
              );
            }
          })}
        </div>
        <div className="text-white">
          <span className="text-xl text-green-400 font-serif font-bold">
            Completed Tasks
          </span>
          {todos.map((item, id) => {
            if (item.completed) {
              return (
                <div
                  key={id}
                  className="flex gap-4 my-10 bg-green-700 p-4 rounded-2xl min-w-100"
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onClick={() => {
                      toggleComplete(item.id);
                    }}
                    className=""
                  ></input>
                  <p className="text-lg">{item.text}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
