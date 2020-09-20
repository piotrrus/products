import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { ProductsListPageComponent } from './products-list-page.component';



@NgModule({
  declarations: [ProductsListPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ProductsListPageComponent }
    ])
  ],
  providers: [ProductService],
})
export class ProductsListPageModule { }
