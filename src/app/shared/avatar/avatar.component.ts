import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() public src?: string;
  @Input() public customClass: string = '';

  constructor() {}

  public getAvatar(): string {
    return this.src || 'assets/images/avatar.svg';
  }
}
