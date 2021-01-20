import { CREATE_POST, FETCH_POST } from "./types"

export const createPost = (post) => {
    return {
        type: CREATE_POST,
        payload: post
    }
}


export const fetchPosts = () => {
    return async dispatch => {
        const respons = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
        const json = await respons.json()

        dispatch({type: FETCH_POST, payload: json})
    }
}       