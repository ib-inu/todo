import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import todosReducer from "./todos/todosSlice";
import userReducer from "./user/userSlice"; // Import the userSlice

const todosPersistConfig = {
    key: "todos",
    storage,
};

const userPersistConfig = {
    key: "user",
    storage,
};

const authPersistConfig = {
    key: "auth",
    storage,
};

const persistedTodosReducer = persistReducer(todosPersistConfig, todosReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer,);
const persistedAuthReducer = persistReducer(authPersistConfig, userReducer,);

const store = configureStore({
    reducer: {
        todos: persistedTodosReducer,
        user: persistedUserReducer,
        auth: persistedAuthReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/REGISTER",
                ],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
