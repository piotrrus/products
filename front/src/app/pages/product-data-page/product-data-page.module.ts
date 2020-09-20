import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { ProductDataPageComponent } from './product-data-page.component';



@NgModule({
  declarations: [ProductDataPageComponent],
  imports: [SharedModule,
    RouterModule.forChild([
      { path: '', component: ProductDataPageComponent },
    ])
  ],
})
export class ProductDataPageModule { }
