import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  title: string;
  list: any;
  formName: any;
  formData: any;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  confirm() {
    this.close();
  }

  close() {
    this.bsModalRef.hide();
  }

}
