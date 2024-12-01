"use client";

import styles from "../styles/Todo.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <div className={styles.inputSection}>
        <input type="text" placeholder="Enter a task..." />

        <button>Add</button>
      </div>
      <ul className={styles.todoList}>
        <li className={styles.todoItem}>
          <span></span>
          <button>Edit</button>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}
