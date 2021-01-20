import { CREATE_POST } from './types'

const initionalState = {
    posts: [],
    fetchedPosts: []
}

const postsReducer = (state = initionalState, action) => {
    switch (action) {
        case CREATE_POST:
            return { ...state, posts: [...state.posts, [action.payload]]}    
        default:
            return state;
    }
}

export default postsReducer
