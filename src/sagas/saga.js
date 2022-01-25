import { takeEvery ,takeLatest, put, delay } from "redux-saga/effects"

function* watchCounterHandler(){
    yield delay(4000);
    yield put({type: "INCREMENT_ASYNC", value: 1 });
}

export function* watchCounterUp(){
    yield takeEvery("INCREMENT", watchCounterHandler)
}