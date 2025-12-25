import { createSelector } from '@reduxjs/toolkit';

// note: this is selectore concept

const selectCount = (state) => state;

export const selectComponentsData = createSelector([selectCount], (count) => {
  return {
    value: count.value,
    sumOfNumberPayload: count.sumOfNumberPayload,
    unHandleAction: count.unHandleAction,
  };
});

export const evenNum = createSelector(
  [selectCount],
  (count) => count.value % 2 === 0
);
