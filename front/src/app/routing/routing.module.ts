import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from '../ui/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/products-list-page/products-list-page.module').then(m => m.ProductsListPageModule),
  },
  {
    path: 'products',
    loadChildren: () => import('../pages/products-list-page/products-list-page.module').then(m => m.ProductsListPageModule),
  },
  {
    path: 'product/:id',
    loadChildren: () => import('../pages/product-data-page/product-data-page.module').then(m => m.ProductDataPageModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('../pages/cart-page/cart-page.module').then(m => m.CartPageModule),
  },
  /*{
    path: 'genres',
    loadChildren: () => import('../pages/genres-page/genres-page.module').then(m => m.GenresPageModule),
  },*/
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
