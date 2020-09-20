import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDataPageComponent } from './product-data-page.component';

describe('ProductDataPageComponent', () => {
  let component: ProductDataPageComponent;
  let fixture: ComponentFixture<ProductDataPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDataPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
