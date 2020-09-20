import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page.component';



@NgModule({
  declarations: [CartPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CartPageComponent },
    ])
  ]
})
export class CartPageModule { }
