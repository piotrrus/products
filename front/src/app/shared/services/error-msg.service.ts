import { Injectable } from '@angular/core';

@Injectable()
export class ErrorMsgService {

  /**
   *
   * @param {string} validatorName
   * @param {any} value
   * @returns {string}
   */
  getValidatorErrorMessage(validatorName: string, value?: any): string {

    const messages = {
      'required': 'To pole jest wymagane.',
      'maxlength': 'Przekroczono dopuszczalną ilość znaków.',
      'lettersOnly': 'Dupuszcalne tylko litery, kropki i myślnik.',
      'notNull': 'Wpisana wartość musi być większa od zera.',
      'pattern': 'Niewłaściwy format danych.',
      'email': 'Wprowadź poprawny adres e-mail.',
      'dateFormat': 'Niepoprawny format daty',
    };

    return messages[validatorName];
  }
}
