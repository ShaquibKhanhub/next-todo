import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
    updateTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: { todos: todoSlice.reducer },
});
