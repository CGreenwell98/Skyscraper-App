import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Building } from '../models/Building';
import { BuildingsService } from './buildings.service';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private building: Building = {} as Building;
  private buildingSubject = new Subject<Building>();

  private buildingList: Building[] = [] as Building[];
  private buildingListSubject = new Subject<Building[]>();

  private displayAddBuilding: boolean = false;
  private addBuildingSubject = new Subject<boolean>();

  private searchQuery = '';

  constructor(private buildingService: BuildingsService) {
    this.buildingService.getBuildings().subscribe((res: Building[]) => {
      this.buildingListSubject.next(res);
      this.setCurBuilding(res[0]);
    });
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

  searchBuildings(query: any) {
    this.searchQuery = query;
    this.buildingService.searchBuildings(query).subscribe((list) => {
      this.buildingList = list;
      this.buildingListSubject.next(this.buildingList);
    });
  }

  addBuilding(building: Building) {
    this.buildingService.addBuilding(building).subscribe(() => {
      this.searchBuildings(this.searchQuery);
      this.setCurBuilding(building);
      this.setAddBuildingState(false);
    });
  }

  getBuildingList(): Observable<Building[]> {
    return this.buildingListSubject.asObservable();
  }
}
