import { combineReducers } from "redux"
import PostsReducer from './postsReducer'
import AppReducer from "./appReducer";

const rootReducer = combineReducers({
    posts: PostsReducer,
    app: AppReducer
})

export default rootReducer