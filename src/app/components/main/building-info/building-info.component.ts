import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/models/AppState';
import { Building } from 'src/app/models/Building';
import { curBuilding } from 'src/app/selectors/building.selector';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-building-info',
  templateUrl: './building-info.component.html',
  styleUrls: ['./building-info.component.scss'],
})
export class BuildingInfoComponent implements OnInit {
  building: Building = {} as Building;

  constructor(private uiService: UiService, private store: Store<Appstate>) {
    // this.uiService.curBuilding().subscribe((val) => (this.building = val));
    this.store.select(curBuilding).subscribe((val) => (this.building = val));
  }

  ngOnInit(): void {}
}
