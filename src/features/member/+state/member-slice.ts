import { createSlice } from '@reduxjs/toolkit'
import { IMember } from '../../../model/member';

const memberList: IMember[] = [];

export const memberSlice = createSlice({
  name: 'member',
  initialState: {
    memberList,
    error: {}
  },
  
  reducers: {
    fetchMember: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.memberList = action.payload
    },
    fetchFailure: (state, action) => {
      state.error += action.payload
    },
  },
});

export const { fetchMember, fetchFailure } = memberSlice.actions
export default memberSlice.reducer