import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UiState } from '../models/UiState';

const getUiState = createFeatureSelector<UiState>('ui');

export const getShowAddBuilding = createSelector(
  getUiState,
  (state) => state.showAddBuilding
);
