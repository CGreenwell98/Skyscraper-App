import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Building } from '../models/Building';
import { BuildingsService } from './buildings.service';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private building: Building = {} as Building;
  private buildingSubject = new Subject<Building>();

  private displayAddBuilding: boolean = false;
  private addBuildingSubject = new Subject<boolean>();

  constructor(private buildingService: BuildingsService) {
    this.buildingService
      .getBuilding(1)
      .subscribe((res: Building) => this.setCurBuilding(res));
  }

  setCurBuilding(inputBuilding: Building): void {
    this.building = inputBuilding;
    this.buildingSubject.next(this.building);
  }

  curBuilding(): Observable<Building> {
    return this.buildingSubject.asObservable();
  }

  setAddBuildingState(visible: boolean): void {
    this.displayAddBuilding = visible;
    this.addBuildingSubject.next(this.displayAddBuilding);
  }

  addBuildingState(): Observable<boolean> {
    return this.addBuildingSubject.asObservable();
  }
}
