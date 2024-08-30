import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addOrUpdateTask = () => {
    if (!newTask) return;

    if (isEditing) {
      const updatedTasks = tasks.map((task, index) =>
        index === currentTaskIndex ? newTask : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setCurrentTaskIndex(null);
      setMessage("Task updated successfully!");
    } else {
      setTasks([...tasks, newTask]);
      setMessage("Task added successfully!");
    }
    setNewTask("");

    // Clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setMessage("Task deleted successfully!");

    // Clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setMessage("Edit the task and click 'Update Task'");

    // Clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-extrabold text-center my-10">Todo List</h1>

      <div className="flex justify-center mb-4">
        <input
          className="p-4 w-[500px] rounded border-2 border-gray-300"
          type="text"
          placeholder="Write Something"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="p-4 ml-4 rounded border-2 border-sky-300 bg-blue-500 text-white font-bold hover:bg-green-400"
          onClick={addOrUpdateTask}
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>

      {/* Message Notification */}
      {message && (
        <div className="text-center mb-4 text-green-500 font-bold">
          {message}
        </div>
      )}

      <hr className="mb-4" />

      <div className="flex flex-col items-center">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-[600px] p-4 mb-2 rounded border-2 border-gray-300"
          >
            <span>{task}</span>
            <div className="flex items-center">
              <button
                className="flex items-center justify-center p-2 ml-2 rounded border-2 border-sky-300 bg-red-700 text-white font-bold hover:bg-red-400"
                onClick={() => removeTask(index)}
              >
                Delete <MdDelete size={20} />
              </button>
              <button
                className="flex items-center justify-center p-2 ml-2 rounded border-2 border-sky-300 bg-blue-500 text-white font-bold hover:bg-green-400"
                onClick={() => editTask(index)}
              >
                Edit <FiEdit size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
