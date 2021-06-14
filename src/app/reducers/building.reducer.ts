import { createReducer, on } from '@ngrx/store';
import { setBuildingList, setCurBuilding } from '../actions/building.actions';
import { Building } from '../models/Building';
import { BuildingState } from '../models/BuildingState';

export const initialBuildingState: BuildingState = {
  buildingList: [] as Building[],
  curBuilding: {} as Building,
};

export const buildingReducer = createReducer(
  initialBuildingState,
  on(setBuildingList, (state, action) => {
    return {
      curBuilding: state.curBuilding.name
        ? state.curBuilding
        : action.payload[0],
      buildingList: action.payload,
    };
  }),
  on(setCurBuilding, (state, action) => {
    console.log(action.building);
    return {
      ...state,
      curBuilding: action.building,
    };
  })
);
