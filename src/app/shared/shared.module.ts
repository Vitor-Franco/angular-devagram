import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { InputComponent } from './public/input/input.component';
import { PageComponent } from './public/page/page.component';
import { FooterComponent } from './public/footer/footer.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent,
    InputComponent,
    PageComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  exports: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent,
    InputComponent,
    PageComponent,
    FooterComponent,
  ],
  providers: [
    {
      provide: 'DEVAGRAM_URL_API',
      useValue: environment.devagramUrlApi,
    },
  ],
})
export class SharedModule {}
