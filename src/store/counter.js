import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

// 리듀서의 개선된 형태, 여기서 name: 'counter'은 상태의 식별자
// 어떤 액션을 했으냐에 따라 reducers에 있는 메서드가 자동으로 호출됨
// 내부적으로 immer 패키지가 사용되어 직접적으로 상태를 변경하여도 자동으로 상태의 불변성이 유지됨
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 컴포넌트에서 액션을 디스패치 하기 위함
export const counterActions = counterSlice.actions;

export default counterSlice;
