import { SHOW_ALERT, HIDE_ALERT, SHOW_LOADER, HIDE_LOADER } from './types'

const initionalState = {
    loading: false,
    alert: null
}

const appReducer = (state = initionalState, action) => {
    // console.log('--------- PostsReducer -----')
    switch (action.type) {
        case SHOW_ALERT:
            return { ...state, alert: action.payload }
        case HIDE_ALERT:
            return { ...state, alert: null }
        case SHOW_LOADER:
            return { ...state, loading: true }
        case HIDE_LOADER:
            return { ...state, loading: false }
        default:
            return state;
    }
}


export default appReducer;