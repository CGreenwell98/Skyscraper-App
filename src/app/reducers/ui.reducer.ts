import { createReducer, on } from '@ngrx/store';
import { setShowAddBuilding } from '../actions/ui.actions';
import { initialUiState } from '../store/app.state';

export function uiReducer() {
  return createReducer(
    initialUiState,
    on(setShowAddBuilding, (state, action) => {
      console.log(action.show, state);
      return {
        ...state,
        showAddBuilding: action.show,
      };
    })
  );
}
