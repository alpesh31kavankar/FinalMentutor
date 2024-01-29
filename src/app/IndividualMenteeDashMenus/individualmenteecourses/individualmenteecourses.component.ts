import { Component } from '@angular/core';
import { IndividualsearchcourseComponent } from '../../individualsearchcourse/individualsearchcourse.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-individualmenteecourses',
  templateUrl: './individualmenteecourses.component.html',
  styleUrls: ['./individualmenteecourses.component.scss']
})
export class IndividualmenteecoursesComponent {
  modalRefWalkk: MdbModalRef<IndividualsearchcourseComponent> | null = null;
  constructor(private modalService: MdbModalService) {}

  
  openModalSearchCourse() {
    
    this.modalRefWalkk = this.modalService.open(IndividualsearchcourseComponent , {
      
    modalClass: 'modal-xl'
    })
  }
  

}
