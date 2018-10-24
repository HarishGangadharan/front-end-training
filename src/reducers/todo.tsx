import { AnyAction } from 'redux';
import * as Actions from '../actions/Action'

const initialState: any = {
    todos: []
}

export default function reducer(state: any = initialState, action: AnyAction) {
    if (typeof state === undefined) {
        return initialState
    }

    switch (action.type) {
        case Actions.LIST_ACTION.ADD_LIST:
            return {
                ...state,
                todos: initialState.todos.push(action.value)
            }
        default:
            return state
    }
}