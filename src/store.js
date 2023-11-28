import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './Slice/taskSlice';

export const store = configureStore({
    reducer: {
        task: taskReducer
    }
});

