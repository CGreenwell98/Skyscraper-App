import { createReducer, on } from '@ngrx/store';
import { addBuildings } from '../actions/building.actions';
import { Building } from '../models/Building';
import { BuildingState } from '../models/BuildingState';

export const initialBuildingState: BuildingState = {
  curBuilding: {} as Building,
  buildingList: [] as Building[],
};

export const buildingReducer = createReducer(
  initialBuildingState,
  on(addBuildings, (state, action) => {
    return {
      ...state,
      buildingList: action.payload,
    };
  })
);
