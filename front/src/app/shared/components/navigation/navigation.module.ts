import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from '../navigation/navigation.component';
import { MaterialModule } from '../../modules/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    //      FlexLayoutModule,
    RouterModule
  ],
  exports: [
    NavigationComponent
  ],
  declarations: [NavigationComponent]
})
export class NavigationModule {
}
