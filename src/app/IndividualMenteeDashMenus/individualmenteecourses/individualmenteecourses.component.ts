import { Component, OnInit } from '@angular/core';
import { IndividualsearchcourseComponent } from '../../individualsearchcourse/individualsearchcourse.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-individualmenteecourses',
  templateUrl: './individualmenteecourses.component.html',
  styleUrls: ['./individualmenteecourses.component.scss']
})
export class IndividualmenteecoursesComponent implements OnInit{
  modalRefWalkk: MdbModalRef<IndividualsearchcourseComponent> | null = null;
  constructor(private modalService: MdbModalService) {}

  
  openModalSearchCourse() {
    
    this.modalRefWalkk = this.modalService.open(IndividualsearchcourseComponent , {
      
    modalClass: 'modal-xl'
    })
  }
  
    // to load modal css and js
    public loadScript() {
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = '/assets/js/flickity.pkgd.min.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
  }

  ngOnInit(): void {
    this.loadScript();
// this.Chartshow();
    // this.openModal();

  }
}
