import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base } from './Base.form';
import { textValidator } from '../validators/custom-text.validator';

export class ProductForm extends Base {

  private _form: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    super(fb);
    this.createForm();
  }

  createForm(): FormGroup {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100), textValidator]],
      id_genre: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });

    return this._form;
  }

  get name() {
    return this.form.get('name');
  }

  get id_genre() {
    return this.form.get('id_genre');
  }



  get price() {
    return this.form.get('price');
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

}
