import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  searchBox: string = '';

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

  onSubmit() {
    this.buildingList = this.buildingsService.searchBuildings(this.searchBox);
    this.searchBox = '';
  }
}
