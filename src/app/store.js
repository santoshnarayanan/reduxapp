import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";

console.log("store");
export const store = configureStore(
    {
    reducer: {
       posts: postsReducer
    },
});
