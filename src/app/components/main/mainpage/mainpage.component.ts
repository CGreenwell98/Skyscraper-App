import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Appstate } from 'src/app/models/AppState';
import { getShowAddBuilding } from 'src/app/selectors/ui.selector';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  showAddBuilding$: Observable<boolean> = this.store.select(getShowAddBuilding);
  // showAddBuilding$: Observable<boolean> = this.uiService.addBuildingState();

  constructor(private store: Store<Appstate>, private uiService: UiService) {}

  ngOnInit(): void {}
}
