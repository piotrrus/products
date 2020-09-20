import { Component, OnInit } from '@angular/core';
import { ErrorMsgService } from '../../services/error-msg.service';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnInit {

  private validationService = new ErrorMsgService();

  constructor() { }

  ngOnInit() { }

  public getErrorMessage(validatorName: string) {
    return this.validationService.getValidatorErrorMessage(validatorName);
  }

}
