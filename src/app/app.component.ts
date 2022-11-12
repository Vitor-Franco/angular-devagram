import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'devagram-angular';

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      image: [null],
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onChangeImage(): void {
    console.log('trocou a imagem');
  }

  getReference(fieldName: string): AbstractControl {
    return this.form.controls[fieldName];
  }

  submit() {
    console.log(this.form.value);
  }
}
