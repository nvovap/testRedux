import { CREATE_POST, SHOW_ALERT } from "./types";
import { showAlert } from "./actions";

const forbidden = ['fuck', 'span', 'php']

export const forbiddenWordsMiddleware = (state) => (next) => (action) => {
    if (action.type === CREATE_POST) {
        const found = forbidden.filter(word => action.payload.title.includes(word))
        if (found.length) {
            return state.dispatch(showAlert('You are spamer!!! Go away!'))
        }
    }
    return next(action)
}

