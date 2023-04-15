import axios from "axios";
import { call , put , takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { types } from "../types/types";

export function* getdata(): any {

    try {
        const res: AxiosResponse = yield call(axios.get, "https://api.instantwebtools.net/v1/airlines");
        yield put({ type: "FETCH_SUCCESS", payload: res.data })

    } catch (error) {
        yield put({ type: "FETCH_ERROR" })
        console.log(" error")
    }

}

export function* rootSaga() {
    yield takeEvery(types.GET_DATA, getdata)
}

