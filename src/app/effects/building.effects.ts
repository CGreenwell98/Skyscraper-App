import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  concatMap,
  debounceTime,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import {
  getBuildings,
  postBuilding,
  searchBuildings,
  setCurBuilding,
} from '../actions/building.actions';
import { setShowAddBuilding } from '../actions/ui.actions';
import { Appstate } from '../models/AppState';
import { getSearchQuery } from '../selectors/ui.selector';
import { BuildingsService } from '../services/buildings.service';

@Injectable()
export class BuildingEffects {
  searchQuery: string = '';

  constructor(
    private actions$: Actions,
    private buildingService: BuildingsService,
    private store: Store<Appstate>
  ) {
    this.store
      .select(getSearchQuery)
      .subscribe((query) => (this.searchQuery = query));
  }

  getBuildings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBuildings),
      mergeMap(() => this.buildingService.getBuildings()),
      map((buildings) => ({
        type: 'set building list',
        payload: buildings,
      }))
    );
  });

  searchBuildings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchBuildings),
      debounceTime(500),
      switchMap((action) =>
        this.buildingService.searchBuildings(action.searchQuery)
      ),
      map((buildings) => ({
        type: 'set building list',
        payload: buildings,
      }))
    );
  });

  postBuilding$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postBuilding),
      mergeMap((action) =>
        this.buildingService.addBuilding(action.newBuilding)
      ),
      concatMap((building) => [
        setCurBuilding({ building }),
        // setShowAddBuilding({ show: false }),
        searchBuildings({ searchQuery: this.searchQuery }),
      ])
    );
  });
}
