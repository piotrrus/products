import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BootstrapModule } from './bootstrap.module';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

import { RestApiService } from '../services/api-service.service';
import { ErrorMsgService } from '../services/error-msg.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TrimDirective } from '../directives/trim.directive';
import { UpperFirstDirective } from '../directives/upper-first.directive';
import { CartService } from '../services/cart.service';

import { ProductFormComponent } from '../components/forms/product-form/product-form.component';
import { ProductGenreFormComponent } from '../components/forms/product-genre-form/product-genre-form.component';

const SHARED_MODULES = [
  CommonModule,
  BootstrapModule,
  MaterialModule,
  ToastrModule,
  FormsModule,
  ReactiveFormsModule,
  NgxDatatableModule,
];

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductGenreFormComponent,
    PageNotFoundComponent,
    TrimDirective,
    UpperFirstDirective
  ],
  exports: [
    SHARED_MODULES,
    RouterModule,
    NgxDatatableModule,
    ProductFormComponent,
    ProductGenreFormComponent,
  ],
  imports: [
    SHARED_MODULES,
    NgxDatatableModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  providers: [
    RestApiService, ErrorMsgService
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CartService]
    };
  }
}
