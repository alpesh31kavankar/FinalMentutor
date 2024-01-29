import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-individualmentoraddcourses',
  templateUrl: './individualmentoraddcourses.component.html',
  styleUrls: ['./individualmentoraddcourses.component.scss']
})
export class IndividualmentoraddcoursesComponent implements OnInit  {


  constructor(public modalRef: MdbModalRef<IndividualmentoraddcoursesComponent>) {}
om(){


}



ngOnInit(): void {
 
  this.om();
}

}
