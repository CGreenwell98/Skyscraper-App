import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BuildingState } from '../models/BuildingState';

const getBuildingState = createFeatureSelector<BuildingState>('building');

export const getBuildingList = createSelector(
  getBuildingState,
  (state) => state.buildingList
);

export const getCurBuilding = createSelector(
  getBuildingState,
  (state) => state.curBuilding
);
