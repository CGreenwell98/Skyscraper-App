import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/Building';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-building-info',
  templateUrl: './building-info.component.html',
  styleUrls: ['./building-info.component.scss'],
})
export class BuildingInfoComponent implements OnInit {
  building: Building = {} as Building;

  constructor(private uiService: UiService) {
    this.uiService.curBuilding().subscribe((val) => (this.building = val));
  }

  ngOnInit(): void {}
}
