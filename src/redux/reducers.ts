import { TOGGLE_DARK_MODE, TOGGLE_BACK_TO_TOP } from "./types"
import { ThemeActionType } from "./actions";

const initialState = {
  darkMode: false,
  backToTop: false
}

export type StateType = typeof initialState;

export const mainReducer = (state: StateType = initialState, action: ThemeActionType) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    case TOGGLE_BACK_TO_TOP:
      return {
        ...state,
        backToTop: !state.backToTop
      }
    default: return state;
  }
}
