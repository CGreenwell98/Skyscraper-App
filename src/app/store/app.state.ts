import { buildingReducer } from '../reducers/building.reducer';
import { uiReducer } from '../reducers/ui.reducer';

export const appReducer = {
  ui: uiReducer,
  building: buildingReducer,
};
