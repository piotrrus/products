import { ModalComponent } from './shared/components/modal/modal.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/modules/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
// import { ProductFormComponent } from './shared/components/forms/product-form/product-form.component';
// import { ProductGenreFormComponent } from './shared/components/forms/product-genre-form/product-genre-form.component';

@NgModule({
  declarations: [
    AppComponent, NavigationComponent, ModalComponent,// ProductFormComponent, ProductGenreFormComponent
  ],
  entryComponents: [
    ModalComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
