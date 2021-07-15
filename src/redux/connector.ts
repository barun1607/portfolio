import { toggleDarkMode, ThemeActionType, ButtonActionType, toggleBackToTop } from "./actions";
import { StateType } from "./reducers";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "react";

const mapStateToPropsTheme = (state: StateType) => {
  return {
    darkMode: state.darkMode
  }
}

const mapDispatchToPropsTheme = (dispatch: Dispatch<ThemeActionType>) => {
  return {
    toggleDarkMode: () => dispatch(toggleDarkMode())
  }
}

export const connector = connect(mapStateToPropsTheme, mapDispatchToPropsTheme);

export type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToPropsButton = (state: StateType) => {
  return {
    backToTop: state.backToTop
  }
}

const mapDispatchToPropsButton = (dispatch: Dispatch<ButtonActionType>) => {
  return {
    toggleBackToTop: () => dispatch(toggleBackToTop())
  }
}

export const buttonConnector = connect(mapStateToPropsButton, mapDispatchToPropsButton);

export type PropsForButton = ConnectedProps<typeof buttonConnector>;