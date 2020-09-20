import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent },
    ])
  ]
})
export class HomePageModule { }
