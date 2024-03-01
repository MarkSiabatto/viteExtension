import React from "react";
import "./MainFields.css";

const BottomSection: React.FC = () => {
  const [todoItems, setTodoItems] = React.useState<string[]>([]);
  const [newItemText, setNewItemText] = React.useState<string>("");

  const handleAddItem = () => {
    if (newItemText.trim() !== "") {
      setTodoItems([...todoItems, newItemText]);
      setNewItemText("");
    }
  };

  return (
    <div className="section bottom-section">
      <h3 className="light-txt">To-Do List</h3>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter new item"
        className="large-input"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
      />
      <button type="button" className="dark-button" onClick={handleAddItem}>
        Add Item
      </button>
      <button
        type="button"
        className="dark-button"
        onClick={() => setTodoItems([])}
      >
        Clear All Items
      </button>
    </div>
  );
};

export default BottomSection;
