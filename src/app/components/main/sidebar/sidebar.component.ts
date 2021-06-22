import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  searchBuildings,
  setCurBuilding,
} from 'src/app/actions/building.actions';
import { setSearchQuery, setShowAddBuilding } from 'src/app/actions/ui.actions';
import { Appstate } from 'src/app/models/AppState';
import { Building } from 'src/app/models/Building';
import { buildingList, curBuilding } from 'src/app/selectors/building.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  buildingList: Observable<Building[]> = this.store.select(buildingList);
  curBuilding: Observable<Building> = this.store.select(curBuilding);

  constructor(private store: Store<Appstate>) {}

  ngOnInit(): void {}

  handleListClick(building: Building) {
    this.store.dispatch(setCurBuilding({ building }));
    // this.store.dispatch(setShowAddBuilding({ show: false }));
  }

  addBtnClick() {
    // this.store.dispatch(setShowAddBuilding({ show: true }));
    this.store.dispatch(setCurBuilding({ building: {} as Building }));
  }

  onSearch($event: any) {
    this.store.dispatch(searchBuildings({ searchQuery: $event.target.value }));
    this.store.dispatch(setSearchQuery({ query: $event.target.value }));
  }
}
