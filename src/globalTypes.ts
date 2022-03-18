export interface StateInterface {
  current: string;
}

export interface ActionInterface {
  type: string;
  payload?: unknown;
}