import { ActionInterface, StateInterface } from "../globalTypes";

export const initialState: StateInterface = {
  current: "root"
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