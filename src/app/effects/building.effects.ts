import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { addBuildings, getBuildings } from '../actions/building.actions';
import { Building } from '../models/Building';
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
        this.buildingService
          .getBuildings()
          .pipe(
            map((buildings) => ({ type: 'add buildings', payload: buildings }))
          )
      )
    );
  });
}
