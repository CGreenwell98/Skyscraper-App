import { BuildingState } from './BuildingState';
import { UiState } from './UiState';

export interface Appstate {
  ui: UiState;
  building: BuildingState;
}
