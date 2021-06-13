import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BuildingState } from '../models/BuildingState';

const getBuildingState = createFeatureSelector<BuildingState>('building');

export const buildingList = createSelector(
  getBuildingState,
  (state) => state.buildingList
);

export const curBuilding = createSelector(
  getBuildingState,
  (state) => state.curBuilding
);
