import initialState from './initialstate';

// action actiontypes
import { CHANGE_ORIENTATION } from './actiontypes';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ORIENTATION:
      return {...state, orientation: action.orientation}
    default:
      return state
  }
};

export default rootReducer;
