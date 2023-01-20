//Action definition for React State Reducer Hook
export interface IStateAction<T> {
  type: string;
  payload?: T
}