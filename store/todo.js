"use client";

import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index >= 0) state[index] = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: { todos: todoSlice.reducer },
});
