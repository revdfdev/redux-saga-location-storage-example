const TOGGLE_DROPDOWN = "react-test/dropdown/TOGGLE_DROPDOWN";
const SET_SELECTED_ITEM = "react-test/dropdown/SET_SELECTED_ITEM";

const initialState = {
    isOpen: false,
    selectedItem: {
        id: 0,
        name: "All",
    },
    items: [
        {
            id: 0,
            name: "All",
        },
        {
            id: 1,
            name: "Less than",
        },
        {
            id: 2,
            name: "Greater than",
        }
    ]
}

export default function dropdown(state={...initialState}, action) {
    switch(action.type) {
        case TOGGLE_DROPDOWN:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        case SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.selectedItem
            };
        default:
            return state;
    }
}

export function toggle() {
    return {
        type: TOGGLE_DROPDOWN
    }
}

export function setCurrentSelected(selectedItem) {
    return {
        type: SET_SELECTED_ITEM,
        selectedItem
    }
}