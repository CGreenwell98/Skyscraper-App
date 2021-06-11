import { createReducer, on } from '@ngrx/store';
import { initialBuildingState } from '../store/app.state';

export function buildingReducer() {
  return createReducer(initialBuildingState);
}
