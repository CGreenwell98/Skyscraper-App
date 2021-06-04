import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from 'src/app/models/Building';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  buildingList: Observable<Building[]> = this.buildingsService.getBuildings();

  constructor(private buildingsService: BuildingsService) {}

  ngOnInit(): void {}
}
