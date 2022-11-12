import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { InputComponent } from './public/input/input.component';

@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent,
    InputComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent,
    InputComponent,
  ],
})
export class SharedModule {}
