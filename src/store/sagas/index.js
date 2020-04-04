import { all } from 'redux-saga/effects';
import { getAllUsersSaga, addUserSaga, editUsersSaga } from '../ducks/users';

export default function* rootSaga() {
    yield all([
        getAllUsersSaga(),
        addUserSaga(),
        editUsersSaga()
    ]);
}