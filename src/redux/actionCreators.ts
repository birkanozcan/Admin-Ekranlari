import * as actionTypes from "./actionTypes"
import { FirstAction } from "./types"


export function firstAction() {
    const action: FirstAction = {
      type: actionTypes.FIRST_ACTION,
    }
  
    return action
  }
