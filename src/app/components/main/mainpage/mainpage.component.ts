import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBuildings } from 'src/app/actions/building.actions';
import { Appstate } from 'src/app/models/AppState';
import { getShowAddBuilding } from 'src/app/selectors/ui.selector';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  showAddBuilding$: Observable<boolean> = this.store.select(getShowAddBuilding);

  constructor(private store: Store<Appstate>) {}

  ngOnInit(): void {
    this.store.dispatch(getBuildings());
  }
}
