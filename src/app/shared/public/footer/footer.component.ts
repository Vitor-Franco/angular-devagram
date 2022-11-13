import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() public question?: string;
  @Input() public textAction?: string;
  @Input() public routePath?: string;

  constructor() {}

  ngOnInit(): void {}
}
