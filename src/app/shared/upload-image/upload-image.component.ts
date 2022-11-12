import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  @Input() public refFormControl?: AbstractControl;
  @Input() public customClassContainer: string = '';
  @Input() public previewImage?: string;
  @Input() public previewImageCustomClass: string = '';

  @Output() public onChangeImage: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public onUploadImage(event: any): void {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.previewImage = reader.result as string;
        this.refFormControl?.setValue(file);
        this.refFormControl?.markAsDirty(); // Indica que houve mudança nesse campo.
        this.onChangeImage.emit(this.previewImage);
      };
    }
  }
}
