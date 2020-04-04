import { put, call, takeEvery } from 'redux-saga/effects';

const reflect = p => p.then(v => ({v, status: "fulfilled"}), e => ({ e, status: "Rejected" }));

function getUsers(){
    return localStorage.getItem("users");
}

function addUsers(users) {
    return localStorage.setItem("users", JSON.stringify(users));
}

function editUsers(users) {
    return localStorage.setItem("users", JSON.stringify(users));
}

const GET_ALL_USERS = "react-test/users/GET_ALL_USERS";
const GET_ALL_USERS_SUCCESS = "react-test/users/GET_ALL_USERS_SUCCESS";
const GET_ALL_USERS_FAILURE = "react-test/users/GET_ALL_USERS_FAILURE";

const ADD_USER = "react-test/users/ADD_USER";
const ADD_USER_SUCCESS = "react-test/users/ADD_USER_SUCCESS";
const ADD_USER_FAILURE = "react-test/users/ADD_USER_FAILURE";

const EDIT_USER = "react-test/users/EDIT_USER";
const EDIT_USER_SUCCESS = "react-test/users/EDIT_USER_SUCCESS";
const EDIT_USER_FAILURE = "react-test/users/EDIT_USER_FAILURE";
const ON_SEARCH_FILTER = "react-test/user/ON_SEARCH_FILTER";

const initialstate =  {
    users: [],
    msg: "",
    error: null
}

export default function users(state = {...initialstate}, action) {
    switch(action.type) {
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.users
            };
        case ADD_USER_SUCCESS:
            return {
                ...state,
                msg: action.msg
            };
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                msg: action.msg
            };
        case GET_ALL_USERS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case ADD_USER_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case EDIT_USER_FAILURE:
            return {
                error: action.error
            }
        case ON_SEARCH_FILTER:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

export function onSearch(searchBy, searchText) {
    const localusers = localStorage.getItem("users");
    const users = localusers ? JSON.parse(localusers) : [];
    switch(searchBy.id) {
        case 0:
            return {
                type: ON_SEARCH_FILTER,
                users
            };
        case 1:
            const filteredUsers = users.filter(user => Number(user.salary) < Number(searchText));
            return {
                type: ON_SEARCH_FILTER,
                users: filteredUsers
            };
        case 2:
            const greaterThanUsers = users.filter(user => Number(user.salary) > Number(searchText));
            return {
                type: ON_SEARCH_FILTER,
                users: greaterThanUsers
            };
        default:
            return {
                type: ON_SEARCH_FILTER,
                users
            }
    }
}

export function getAllUsers() {
    return {
        type: GET_ALL_USERS
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function editUser(user) {
    return {
        type: EDIT_USER,
        user
    }
}

function* handleGetAllUser() {
    try {
        const users = localStorage.getItem("users");
        yield put({ type: GET_ALL_USERS_SUCCESS, users: JSON.parse(users) });
    } catch (error) {
        yield put({ type: GET_ALL_USERS_FAILURE, error: error.message });
    }
}

function* handleAddUser({ user }) {
    const localusers = localStorage.getItem("users");
    const users = localusers ? JSON.parse(localusers) : [];
    try {
        const newUsers = [...users, user];
        localStorage.setItem("users", JSON.stringify(newUsers));
        yield put({ type: ADD_USER_SUCCESS, msg: "Successfully added user"});
    } catch (error) {
        yield put({ type: ADD_USER_FAILURE, error: error.message });
    }
}

function* handleEditUser({ user }) {
    const localusers = localStorage.getItem("users");
    const users = localusers ? JSON.parse(localusers) : [];
    try {
        const index = users.findIndex(u => u.name === user.name);
        if (index === -1) {
            throw new Error(" No user with the name found ");
        } else {
            users[index] = user;
            localStorage.setItem("users", JSON.stringify(users));
            yield put({ type: EDIT_USER_SUCCESS, msg: "Successfully edited user" });
        }
    } catch (error) {
        yield put({type: EDIT_USER_FAILURE, error: error.message});
    }
}

export function* getAllUsersSaga() {
    yield takeEvery(GET_ALL_USERS, handleGetAllUser);
}

export function* editUsersSaga() {
    yield takeEvery(EDIT_USER, handleEditUser);
}

export function* addUserSaga() {
    yield takeEvery(ADD_USER, handleAddUser);
}