import { createReducer, on } from '@ngrx/store';
import { setShowAddBuilding } from '../actions/ui.actions';
import { UiState } from '../models/UiState';

export const initialUiState: UiState = {
  showAddBuilding: false,
};

export const uiReducer = createReducer(
  initialUiState,
  on(setShowAddBuilding, (state, action) => {
    return {
      ...state,
      showAddBuilding: action.show,
    };
  })
);
