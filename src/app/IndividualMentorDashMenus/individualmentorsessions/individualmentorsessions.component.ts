import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IndividualaddsessionComponent } from '../individualaddsession/individualaddsession.component';

@Component({
  selector: 'app-individualmentorsessions',
  templateUrl: './individualmentorsessions.component.html',
  styleUrls: ['./individualmentorsessions.component.scss']
})
export class IndividualmentorsessionsComponent {
  modalRefAddsess: MdbModalRef<IndividualaddsessionComponent> | null = null;
  constructor(private modalService: MdbModalService) {}

  openModalAddSession() {
    
    this.modalRefAddsess = this.modalService.open(IndividualaddsessionComponent , {
      
    modalClass: 'modal-xl'
    })
  }


}
