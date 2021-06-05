import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.scss'],
})
export class AddbuttonComponent implements OnInit {
  @Input() text: string = '';
  @Input() width: string = '';
  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.onClick.emit();
  }
}
