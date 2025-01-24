import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    filter: "All Tasks",
    theme: "light"
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
        toggleFilter(state) {
            if (state.filter === "All Tasks") {
                state.filter = "Today";
            } else if (state.filter === "Today") {
                state.filter = "Important";
            } else if (state.filter === "Important") {
                state.filter = "All Tasks";
            }
        },
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
});

export const { setName, setFilter, toggleFilter, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
