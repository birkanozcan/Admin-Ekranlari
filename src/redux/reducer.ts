import * as actionTypes from "./actionTypes"
import {FirstState, FirstAction} from './types'

const init: FirstState = {
  state: []
};

const reducer = (state: FirstState = init, action : FirstAction): FirstState => {
    switch (action.type) {
      case actionTypes.FIRST_ACTION:
        return {
          ...state,
        }
    }
    return state
  }
  
  export default reducer