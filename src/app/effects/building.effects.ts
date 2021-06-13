import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import {
  getBuildings,
  postBuilding,
  searchBuildings,
  setCurBuilding,
} from '../actions/building.actions';
import { setShowAddBuilding } from '../actions/ui.actions';
import { BuildingsService } from '../services/buildings.service';

@Injectable()
export class BuildingEffects {
  constructor(
    private actions$: Actions,
    private buildingService: BuildingsService
  ) {}

  getBuildings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBuildings),
      exhaustMap(() =>
        this.buildingService.getBuildings().pipe(
          map((buildings) => ({
            type: 'set building list',
            payload: buildings,
          }))
        )
      )
    );
  });

  searchBuildings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchBuildings),
      exhaustMap((action) =>
        this.buildingService.searchBuildings(action.searchQuery).pipe(
          map((buildings) => ({
            type: 'set building list',
            payload: buildings,
          }))
        )
      )
    );
  });

  postBuilding$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postBuilding),
      switchMap((action) =>
        this.buildingService.addBuilding(action.newBuilding)
      ),
      switchMap((building) => [setCurBuilding(building)]),
      switchMap((building) => [setShowAddBuilding({ show: false })])
    );
  });
}
