// 📁 todoSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../services";

// ✅ Fetch Todos Thunk
export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("todo/get");
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch todos"
      );
    }
  }
);

// ✅ Create Todo Thunk
export const createTodo = createAsyncThunk(
  "todo/createTodo",
  async ({ title, isCompleted = false }, thunkAPI) => {
    try {
      const response = await API.post("todo/create", { title, isCompleted });
      return response.data.data; // return the created todo
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create todo"
      );
    }
  }
);

// ✅ Slice
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    task: "",
    loading: false,
    error: null,
    addLoading: false,
  },
  reducers: {
    setTask: (state, action) => {
      state.task = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch todos
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Create todo
    builder
      .addCase(createTodo.pending, (state) => {
        state.addLoading = true;
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.addLoading = false;
        state.todos.push(action.payload); // add new todo to list
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.addLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setTask } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
