import { createSelector } from '@reduxjs/toolkit';

// note: this is selectore concept

const selectCount = (state) => {
  console.log('🚀 ~ state:from slector', state);
  return state;
};

export const selectComponentsData = createSelector([selectCount], (count) => {
  return {
    value: count.countSlicer.value,
    sumOfNumberPayload: count.countSlicer.sumOfNumberPayload,
    unHandleAction: count.countSlicer.unHandleAction,
  };
});

export const evenNum = createSelector(
  [selectCount],
  (count) => count.countSlicer.value % 2 === 0
);

export const selectComponentsData2 = createSelector([selectCount], (count) => {
  return {
    value: count.todoSlicer.todo,
  };
});
