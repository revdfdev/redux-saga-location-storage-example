const CHANGE_FORM_STATE = "react-test/form/CHANGE_FORM_STATE";
const CLEAR_FORM_STATE = "react-test/form/CLEAR_FORM_STATE";
const OPEN_ADD_MODAL = "react-test/form/OPEN_ADD_MODAL";
const OPEN_EDIT_MODAL = "react-test/form/OPEN_EDIT_MODAL";
const CLOSE_ADD_MODAL = "react-test/form/CLOSE_ADD_MODAL";
const CLOSE_EDIT_MODAL = "react-test/form/CLOSE_EDIT_MODAL";


const initialState = {
    formState: {
        name: "",
        email: "",
        salary: ""
    },
    isInEditMode: false,
    isModalOpen: false,
}

export default function form( state = {...initialState}, action) {
    switch(action.type) {
        case CHANGE_FORM_STATE:
            const { name, value }  = action.target;
            return {
                ...state,
                formState: {
                    ...state.formState,
                    [name]: value
                }
            }
        case CLEAR_FORM_STATE:
            return {
                ...state,
                formState: {
                    ...initialState.formState
                }
            }
        case OPEN_ADD_MODAL:
            return {
                ...state,
                isInEditMode: false,
                isModalOpen: true
            }
        case OPEN_EDIT_MODAL:
            return {
                ...state,
                isInEditMode: true,
                isModalOpen: true,
                formState: { ...action.user }
            }
        case CLOSE_ADD_MODAL:
            return {
                ...state,
                isInEditMode: false,
                isModalOpen: false
            }
        case CLOSE_EDIT_MODAL:
            return {
                ...state,
                isInEditMode: false,
                isModalOpen: false
            }
        default:
            return state;
    }
}

export function openAddModal() {
    return {
        type: OPEN_ADD_MODAL
    }
}

export function openEditModal( user ) {
    return {
        type: OPEN_EDIT_MODAL,
        user: user
    }
}

export function closeAddModal() {
    return {
        type: CLOSE_ADD_MODAL
    }
}

export function closeEditModal() {
    return {
        type: CLOSE_EDIT_MODAL
    }
}

export function onFormStateChange(e) {
    return {
        type: CHANGE_FORM_STATE,
        target: e.target
    }
}

export function clearFormState() {
    return {
        type: CLEAR_FORM_STATE
    }
}