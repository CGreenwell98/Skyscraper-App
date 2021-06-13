import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { postBuilding } from 'src/app/actions/building.actions';
import { setShowAddBuilding } from 'src/app/actions/ui.actions';
import { Appstate } from 'src/app/models/AppState';
import { Building } from 'src/app/models/Building';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss'],
})
export class AddBuildingComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  description: string = '';

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    private store: Store<Appstate>
  ) {
    this.rForm = fb.group({
      name: [null, Validators.required],
      height: [null, Validators.required],
      floors: [null, Validators.required],
      yearbuilt: [null, Validators.required],
      primaryuse: [null, Validators.required],
      location: [null, Validators.required],
      image: [null, Validators.required],
      description: ['', Validators.maxLength(800)],
    });
  }

  ngOnInit(): void {}

  addBuilding(building: Building) {
    // this.uiService.addBuilding(building);
    this.store.dispatch(postBuilding({ newBuilding: building }));
  }
}
