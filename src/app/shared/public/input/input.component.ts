import { AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() public refForm?: AbstractControl;
  @Input() public image?: string;
  @Input() public type?: string;
  @Input() public placeholder?: string;

  constructor() {}

  ngOnInit(): void {}

  onChangeField(event: any): void {
    console.log('change');
    this.refForm?.setValue(event);
    this.refForm?.markAsDirty();
  }

  getErrorMessage(): string {
    if (!this.refForm?.errors) {
      return '';
    }

    if (this.refForm?.errors['required']) {
      return 'Campo obrigatório';
    }

    return 'Problemas no preenchimento!';
  }
}
