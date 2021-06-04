import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/Building';
import { BuildingsService } from '../../../services/buildings.service';

@Component({
  selector: 'app-building-info',
  templateUrl: './building-info.component.html',
  styleUrls: ['./building-info.component.scss'],
})
export class BuildingInfoComponent implements OnInit {
  building: any = {};

  constructor(private buildingService: BuildingsService) {}

  ngOnInit(): void {
    this.building = this.buildingService
      .getBuildings()
      .subscribe((buildings: Building[]) => (this.building = buildings[6]));
  }
}
