import { ActionInterface, StateInterface } from "../globalTypes";

export const initialState: StateInterface = {
  current: "root"
}

export const reducerFn = (state: StateInterface, action: ActionInterface) => {
  return state
}