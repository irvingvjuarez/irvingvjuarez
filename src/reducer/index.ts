import { ActionInterface, StateInterface } from "../globalTypes";

let currentPath: string = window.location.pathname
currentPath = currentPath === "/" ? "home" : currentPath.slice(1)

export const initialState: StateInterface = {
  current: currentPath
}

export const reducerFn = (state: StateInterface, action: ActionInterface): StateInterface => {
  const { type, payload } = action

  switch(type){
    case "ROUTE":
      return {
        ...state,
        current: payload as string
      }
    default: return state
  }
}