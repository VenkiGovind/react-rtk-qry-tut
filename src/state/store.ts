import { configureStore } from '@reduxjs/toolkit'
import { memberApiSlice } from '../features/member/+state/member-api-slice';
import memberReducer from '../features/member/+state/member-slice';
import { postApiSlice } from '../features/posts/+state/post-api-slice';


export const store =  configureStore({
  reducer: {
    member: memberReducer,
    [memberApiSlice.reducerPath]: memberApiSlice.reducer,
    [postApiSlice.reducerPath]: postApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(memberApiSlice.middleware, postApiSlice.middleware)
  }
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch