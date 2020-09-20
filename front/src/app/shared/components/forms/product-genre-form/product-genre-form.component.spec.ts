import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGenreFormComponent } from './product-genre-form.component';

describe('ProductGenreFormComponent', () => {
  let component: ProductGenreFormComponent;
  let fixture: ComponentFixture<ProductGenreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGenreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGenreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
