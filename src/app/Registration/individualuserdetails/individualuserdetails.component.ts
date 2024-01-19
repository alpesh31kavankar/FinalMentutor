import { Component } from '@angular/core';
import { IndividualselectroleComponent } from '../../individualselectrole/individualselectrole.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-individualuserdetails',
  templateUrl: './individualuserdetails.component.html',
  styleUrls: ['./individualuserdetails.component.scss']
})
export class IndividualuserdetailsComponent {
  modalRef: MdbModalRef<IndividualselectroleComponent> | null = null;

  
  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(IndividualselectroleComponent)
  }
}
