/* eslint-disable @typescript-eslint/no-unused-vars */

import { IStateAction } from './state.action'

export const INIT_STATE = "INIT_STATE";
export const FETCH_CLAIMS = "FETCH_CLAIMS";
export const FETCH_CLAIMS_SUCCESS = "FETCH_CLAIMS_SUCCESS";
export const FETCH_CLAIMS_FAILURE = "FETCH_CLAIMS_FAILURE";

export const actionType = {
  initState: {
    type: INIT_STATE
  },
  fetchClaims: {
    type: FETCH_CLAIMS
  },
  fetchClaimsSuccess: {
    type: FETCH_CLAIMS_SUCCESS
  },
  fetchClaimsFailure: {
    type: FETCH_CLAIMS_FAILURE
  }
}

export class ActionType {
  static INIT_STATE = "INIT_STATE";
}