import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordConfirm(): ValidatorFn {
  return (campoForm: AbstractControl): ValidationErrors | null => {
    const form = campoForm.parent;
    const password = form?.get('password')?.value;
    const confirmPassword = form?.get('confirmPassword')?.value;

    if (password?.value === confirmPassword?.value) {
      return null;
    }

    return {
      confirmPassword: true,
    };
  };
}
