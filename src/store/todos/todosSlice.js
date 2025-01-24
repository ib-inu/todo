import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: Date.now(),
        name: "cook meth",
        important: true,
        completed: true,
        date: Date.now(),
        repeat: false,
        dueDate: null, // Added dueDate property
    }],
}

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addToDo(state, action) {
            state.todos.push({
                id: Date.now(), // Added unique ID generation
                name: action.payload.name,
                date: action.payload.date || Date.now(), // Default to current date if not provided
                completed: false,
                repeat: action.payload.repeat || false, // Default to false if not provided
                important: action.payload.important || false, // Default to false if not provided
                dueDate: action.payload.dueDate || null, // Default to null if not provided
            });
        },
        removeToDo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleImportant(state, action) {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.important = !todo.important;
            }
        },
        toggleComplete(state, action) {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editDate(state, action) {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.date = action.payload.newDate;
            }
        },
        setDueDate(state, action) {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.dueDate = action.payload.dueDate;
            }
        },
    }
})

export default todosSlice.reducer;
export const { addToDo, removeToDo, toggleImportant, toggleComplete, editDate, setDueDate } = todosSlice.actions;
