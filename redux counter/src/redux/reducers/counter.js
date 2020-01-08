/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 * Remember that actions only describe what happened, but don't describe how the application's state changes.
 * @see {@link https://redux.js.org/basics/reducers}
 * 
 */


import { INCREMENT, DECREMENT } from "../actionTypes";

export default function (state = initialState, action) {
    switch (action.type) {
        // ADD the case handlers for INCREMENT and DECREMENT
        case INCREMENT:
            return {...state,count:
                state.count +10};
        case DECREMENT:
            return {...state,count:
                state.count -10};

        default:
            return {
                ...state
            };
    }
}

export const initialState = {
    count: 0
};