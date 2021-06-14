import { createAction, props } from '@ngrx/store';

export const setShowAddBuilding = createAction(
  'setShowAddBuilding',
  props<{ show: boolean }>()
);

export const setSearchQuery = createAction(
  'set query string',
  props<{ query: string }>()
);
