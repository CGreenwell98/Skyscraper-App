import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  addBuildingVisible: Observable<boolean> = this.uiService.addBuildingState();

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}
}
