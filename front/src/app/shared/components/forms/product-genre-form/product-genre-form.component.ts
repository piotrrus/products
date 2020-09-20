import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from '../../base/base.component';

import { GenreForm } from 'src/app/shared/forms/Genre.form';

import { ProductGenreService } from '../../../services/product-genre.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { dbOptions } from '../../../enums/db-options.enum';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-genre-form',
  templateUrl: './product-genre-form.component.html',
  styleUrls: ['./product-genre-form.component.css']
})
export class ProductGenreFormComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() formData: any;

  genreData: any;

  public genreForm: GenreForm;
  private genreId: number;

  constructor(
    private fb: FormBuilder,
    private productGenreService: ProductGenreService,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {
    super();
    this.genreForm = new GenreForm(fb);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const formData = changes.formData;
    if (formData.currentValue) {
      this.setValues(formData.currentValue);
    }
  }

  private setValues(authorData) {
    this.genreForm.name.setValue(authorData.name);
    if (authorData.id) {
      this.genreId = authorData.id;
    }
  }

}
