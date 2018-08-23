import { combineReducers } from 'redux';
import PolyListReducer from './PolyListReducer';
import CurrentReducer from './CurrentReducer';

export default combineReducers({
    posts: PolyListReducer,
    current: CurrentReducer
});

