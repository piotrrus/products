import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { ModalComponent } from './modal.component';

import { ProductFormComponent } from '../../components/forms/product-form/product-form.component';
import { ProductGenreFormComponent } from '../../components/forms/product-genre-form/product-genre-form.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent, ProductFormComponent, ProductGenreFormComponent],
  exports: [ModalComponent, ProductFormComponent, ProductGenreFormComponent, FormGroup, ReactiveFormsModule],
  imports: [
    SharedModule, ModalComponent, ProductFormComponent, ProductGenreFormComponent
  ]
})
export class ModalModule { }
