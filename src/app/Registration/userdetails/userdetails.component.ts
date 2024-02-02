import { Component } from '@angular/core';
import { SelectrolemodalComponent } from '../../selectrolemodal/selectrolemodal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent {
  modalRef: MdbModalRef<SelectrolemodalComponent> | null = null;
 
  
  constructor(private modalService: MdbModalService) {

  }


  openModal() {
    this.modalRef = this.modalService.open(SelectrolemodalComponent)
  }
}
