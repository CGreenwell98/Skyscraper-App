import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Building } from 'src/app/models/Building';
import { BuildingsService } from 'src/app/services/buildings.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  buildingList: Observable<Building[]> = this.buildingsService.getBuildings();
  curBuilding: Observable<Building> = this.uiService.curBuilding();

  constructor(
    private buildingsService: BuildingsService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {}

  handleClick(building: Building) {
    this.uiService.setCurBuilding(building);
    this.uiService.setAddBuildingState(false);
  }

  addBtnClick() {
    this.uiService.setAddBuildingState(true);
  }

  onSearch($event: any) {
    of($event.target.value)
      .pipe(debounceTime(1000))
      .subscribe(
        (text) =>
          (this.buildingList = this.buildingsService.searchBuildings(text))
      );
  }
}
