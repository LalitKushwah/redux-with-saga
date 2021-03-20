import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const delay = time => new Promise(resolve => setTimeout(resolve, time));

function* incrementBy5() {
    yield call(delay, 5000);
    yield put({ type: 'INC_5' });
}

function* saga() {
    yield takeLatest("INC_5_REQUESTED", incrementBy5);
};


export default saga;