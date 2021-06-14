import { createReducer, on } from '@ngrx/store';
import { setSearchQuery, setShowAddBuilding } from '../actions/ui.actions';
import { UiState } from '../models/UiState';

export const initialUiState: UiState = {
  showAddBuilding: false,
  searchQuery: '',
};

export const uiReducer = createReducer(
  initialUiState,
  on(setShowAddBuilding, (state, action) => {
    return {
      ...state,
      showAddBuilding: action.show,
    };
  }),
  on(setSearchQuery, (state, action) => {
    return {
      ...state,
      searchQuery: action.query,
    };
  })
);
