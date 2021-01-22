import { call, put, takeEvery, } from 'redux-saga/effects'
import { hideLoader, showLoader, showAlert } from './actions';
import { FETCH_POST, REQUEST_POSTS } from "./types";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

export function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({ type: FETCH_POST, payload })
        yield put(hideLoader())
    } catch (error) {
        yield put(hideLoader())
        yield put(showAlert(`Errore: ${error.message}`))
    }
}


async function fetchPosts() {
    const respons = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    const json = await respons.json()
    return json;
}