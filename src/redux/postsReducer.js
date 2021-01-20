import { CREATE_POST, FETCH_POST } from './types'

const initionalState = {
    posts: [],
    fetchedPosts: []
}

const postsReducer = (state = initionalState, action) => {
    // console.log('--------- PostsReducer -----')
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload]}  
        case FETCH_POST:
            return {...state, fetchedPosts: action.payload} 
        default:
            return state;
    }
}

export default postsReducer
