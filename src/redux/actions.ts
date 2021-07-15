import { TOGGLE_DARK_MODE, TOGGLE_BACK_TO_TOP } from "./types";

export type ThemeActionType = ReturnType<typeof toggleDarkMode>;

export const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE
  }
}

export type ButtonActionType = ReturnType<typeof toggleBackToTop>;

export const toggleBackToTop = () => {
  return {
    type: TOGGLE_BACK_TO_TOP
  }
}
