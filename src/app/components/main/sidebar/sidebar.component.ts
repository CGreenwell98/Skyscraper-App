import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Building } from 'src/app/models/Building';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  buildingList: Observable<Building[]> = this.uiService.getBuildingList();
  curBuilding: Observable<Building> = this.uiService.curBuilding();

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  handleClick(building: Building) {
    this.uiService.setCurBuilding(building);
    this.uiService.setAddBuildingState(false);
  }

  addBtnClick() {
    this.uiService.setAddBuildingState(true);
  }

  onSearch($event: any) {
    this.uiService.searchBuildings($event.target.value);
  }
}
