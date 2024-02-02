import { Component } from '@angular/core';
import { IndividualsearchcourseComponent } from '../../individualsearchcourse/individualsearchcourse.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IndividualmentoraddcoursesComponent } from '../individualmentoraddcourses/individualmentoraddcourses.component';
@Component({
  selector: 'app-individualmentorcourse',
  templateUrl: './individualmentorcourse.component.html',
  styleUrls: ['./individualmentorcourse.component.scss']
})
export class IndividualmentorcourseComponent {
  modalRefWalkk: MdbModalRef<IndividualsearchcourseComponent> | null = null;
  modalRefWalkkadd: MdbModalRef<IndividualmentoraddcoursesComponent> | null = null;
  constructor(private modalService: MdbModalService) {}

  
  openModalSearchCourse() {
    
    this.modalRefWalkk = this.modalService.open(IndividualsearchcourseComponent , {
      
    modalClass: 'modal-xl'
    })
  }

  openModalAddCourse() {
    
    this.modalRefWalkkadd = this.modalService.open(IndividualmentoraddcoursesComponent , {
      
    modalClass: 'modal-xl'
    })
  }
  

}


