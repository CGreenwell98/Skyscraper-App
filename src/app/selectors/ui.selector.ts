import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UiState } from '../models/UiState';

const getUiState = createFeatureSelector<UiState>('ui');

export const getShowAddBuilding = createSelector(getUiState, (state) => {
  // console.log(state.showAddBuilding);

  return state.showAddBuilding;
});
