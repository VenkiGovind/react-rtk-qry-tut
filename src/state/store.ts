import { configureStore } from '@reduxjs/toolkit'
import { planApiSlice } from '../features/insurance-plan/+state/plan-api-slice';
import { memberApiSlice } from '../features/member/+state/member-api-slice';
import { postApiSlice } from '../features/posts/+state/post-api-slice';


export const store =  configureStore({
  reducer: {
    [memberApiSlice.reducerPath]: memberApiSlice.reducer,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
    [planApiSlice.reducerPath]: planApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(memberApiSlice.middleware, postApiSlice.middleware, planApiSlice.middleware)
  }
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch