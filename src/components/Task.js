import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h3>{task.text} </h3>
      <FaTimes
        style={{ color: "red", cursor: "pointer", alignSelf: "flex-end" }}
        onClick={() => onDelete(task.id)}
      />
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
