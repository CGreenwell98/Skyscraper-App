import { createAction, props } from '@ngrx/store';

export const setShowAddBuilding = createAction(
  'setShowAddBuilding',
  props<{ show: boolean }>()
);
