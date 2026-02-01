import { createSelector } from '@reduxjs/toolkit';

const selectData = (state) => {
  console.log('🚀 ~ state:', state);
  return state;
};

export const selectedComponents = createSelector([selectData], (value) => {
  console.log('🚀 ~ valuedfgfdf:', value);
  return {
    count: value.count.value,
    updateByPayload: value.count.sumOfNumberPayload,
    random: value.count.unHandleAction,
  };
});

export const isEven = createSelector([selectData], (count) => {
  return count.count.value % 2 === 0;
});
