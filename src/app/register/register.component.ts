import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Component } from '@angular/core';
import { passwordConfirm } from '../shared/validators/password-confirm.validator';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.form = this.fb.group({
      file: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, passwordConfirm()]],
    });
  }

  getFormReference(fieldName: string): AbstractControl {
    return this.form.controls[fieldName];
  }

  async onSubmit() {
    if (this.form.invalid) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    try {
      const formValues = this.form.value;
      let body = {
        nome: formValues.name,
        email: formValues.email,
        senha: formValues.password,
      } as any;

      if (formValues.file) {
        body = new FormData();
        body.append('file', formValues.file);
        body.append('nome', formValues.name);
        body.append('email', formValues.email);
        body.append('senha', formValues.password);
      }

      await this.registerService.register(body);
      alert('Usuário cadastrado com sucesso!');

      // Redirecionar o usuário para a página logada
    } catch (e: any) {
      const errorMessage = e?.error?.erro || 'Erro ao cadastrar usuário!';
      alert(errorMessage);
    }
  }
}
