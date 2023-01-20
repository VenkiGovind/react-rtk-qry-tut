import { IClaims } from "../model/claims";
import { ActionType, FETCH_CLAIMS } from "./actions";
import { IStateAction } from "./state.action";

interface IState {
  claims: {
    records: IClaims[];
    loading: boolean;
    error?: {}
  }
};
const initialState: IState = {
  claims: {
    records: [],
    loading: false,
  },
};

export const rootReducer = (state: IState = initialState, action: IStateAction<IState>) => {
  switch(action.type) {
    case ActionType.INIT_STATE:
      return state;
  }
}