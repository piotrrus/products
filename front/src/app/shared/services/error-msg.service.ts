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
      'required': 'This field is required.',
      'maxlength': 'Number of signs are limited',
      'lettersOnly': 'Letters only allowed.',
      'notNull': 'Wpisana wartość musi być większa od zera.',
      'pattern': 'Incorrect data format.',
      'email': 'Wprowadź poprawny adres e-mail.',
      'dateFormat': 'Niepoprawny date format',
      'currencyFormat': 'Incorrect currency format.',
    };

    return messages[validatorName];
  }
}
