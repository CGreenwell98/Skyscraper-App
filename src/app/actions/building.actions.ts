import { createAction, props } from '@ngrx/store';
import { Building } from '../models/Building';

export const getBuildings = createAction('get buildings');
export const getBuildingById = createAction('get building by id');
export const postBuildingById = createAction('post building');

export const addBuilding = createAction(
  'add building',
  props<{ building: Building }>()
);
export const addBuildings = createAction(
  'add buildings',
  props<{ payload: Building[] }>()
);
