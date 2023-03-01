import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter';
import authSlice from './auth';

// configureStore를 사용하면 combineReducer처럼 여러개의 리듀서를 합칠 수 있다.
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
