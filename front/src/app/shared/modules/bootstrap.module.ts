import { NgModule } from '@angular/core';

// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  declarations: [],
  imports: [
    // CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    // AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RatingModule.forRoot()
  ],
  exports: [
    //CarouselModule,
    ButtonsModule,
    CollapseModule,
    // AccordionModule,
    BsDropdownModule,
    ModalModule,
    RatingModule
  ]
})
export class BootstrapModule { }
