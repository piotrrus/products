import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

export abstract class Base {
  protected _fb: FormBuilder;

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }

  get fb(): FormBuilder {
    return this._fb;
  }

  set fb(value: FormBuilder) {
    this._fb = value;
  }

  protected abstract createForm();

  markTouched(group, withoutErrors?: boolean) {
    if (group instanceof FormGroup) {
      for (const control of Object.keys(group.controls)) {
        const formElement = group.get(control);
        this.markTouched(formElement);
      }
    }
    if (group instanceof FormControl) {
      group.markAsTouched();
      group.updateValueAndValidity({ onlySelf: false, emitEvent: false });
      withoutErrors && group.setErrors(null);
    }
    if (group instanceof FormArray) {
      const array = <FormArray>group;
      for (let i = 0; i < array.length; i++) {
        this.markTouched(array.at(i));
      }
    }
  }

  public formFieldInvalid(formControl: AbstractControl) {
    return formControl.touched && formControl.invalid;
  }
}
