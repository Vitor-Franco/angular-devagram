import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public text?: string;
  @Input() public color = 'primary';
  @Input() public customClass = '';
  @Input() public type = 'button';
  @Input() public isDisabled = false;

  constructor() {}
}
