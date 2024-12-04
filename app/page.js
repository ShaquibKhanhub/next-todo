"use client";

import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Todo.module.scss";
import { useState } from "react";
import { addTodo, updateTodo, deleteTodo } from "../store/todo";

export default function Home() {
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodo({ id: Date.now(), task }));
      setTask("");
    }
  };

  const handleEdit = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setTask(todo.task);
      setEditId(id);
    }
  };

  const handleUpdate = () => {
    if (task.trim()) {
      dispatch(updateTodo({ id: editId, task }));
      setTask("");
      setEditId(null);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}> Welcome to Your Todo List 📝</div>
      <div className={styles.inputSection}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={editId ? handleUpdate : handleAdd}>
          {editId ? "Update" : "Add"}
        </button>
      </div>
      <ul className={styles.todoList}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className={styles.todoItem}>
              <span>{todo.task}</span>
              <button
                className={styles.edit}
                onClick={() => handleEdit(todo.id)}
              >
                Edit
              </button>
              <button
                className={styles.delete}
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No tasks available</li>
        )}
      </ul>
    </div>
  );
}
