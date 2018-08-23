import { SET_CURRENT_POST } from '../actions/types';

const INITIAL_STATE = -1;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_POST:
            return action.payload;
        default:
        return state;
    }
};

