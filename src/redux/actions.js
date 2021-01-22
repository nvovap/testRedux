import { CREATE_POST, FETCH_POST, SHOW_ALERT, HIDE_ALERT, SHOW_LOADER, HIDE_LOADER, REQUEST_POSTS } from "./types"

export const createPost = (post) => {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export const showAlert = (text) => {
    return (dispatch) => {
        dispatch({type: SHOW_ALERT, payload: text})
        setTimeout(()=>{
            dispatch(hideAlert())
        }, 3000)
    }
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}


export const fetchPosts = () => {
    return {type: REQUEST_POSTS}
    /*return async dispatch => {
        try {
            dispatch(showLoader())
            const respons = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
            const json = await respons.json()

            dispatch({ type: FETCH_POST, payload: json })
            dispatch(hideLoader())
        } catch (error) {
            dispatch(hideLoader())
            dispatch(showAlert(`Errore: ${error.message}`))
        }
    }*/
}       