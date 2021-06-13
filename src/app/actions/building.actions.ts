import { createAction, props } from '@ngrx/store';
import { Building } from '../models/Building';

// Effects
export const getBuildings = createAction('get buildings');
// export const getBuildingById = createAction('get building by id');
export const postBuilding = createAction(
  'post building',
  props<{ newBuilding: Building }>()
);
export const searchBuildings = createAction(
  'search buildings',
  props<{ searchQuery: string }>()
);

// State:
export const setCurBuilding = createAction(
  'set building',
  props<{ building: Building }>()
);
export const setBuildingList = createAction(
  'set building list',
  props<{ payload: Building[] }>()
);
