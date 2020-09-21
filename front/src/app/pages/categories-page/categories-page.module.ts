import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { CategoriesPageComponent } from './categories-page.component';




@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CategoriesPageComponent }
    ])
  ],
})
export class CategoriesPageModule { }
