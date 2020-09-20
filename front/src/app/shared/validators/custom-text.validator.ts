import { FormControl } from '@angular/forms';

export function textValidator(control: FormControl) {

  const _textPattern: any = '^[A-Za-z\'"sp{L}ęóąśłżźćńĘÓĄŚŁŻŹĆŃ _-]*$';

  let isValid: boolean = false;

  if (control.value) {
    if (control.value.match(_textPattern)) {
      isValid = true
    }
  } else {
    return null;
  }

  return isValid ? null : {
    textValidator: {
      valid: false
    }
  };
}
