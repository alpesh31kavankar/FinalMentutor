import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-individualsearchcourse',
  templateUrl: './individualsearchcourse.component.html',
  styleUrls: ['./individualsearchcourse.component.scss']
})
export class IndividualsearchcourseComponent implements OnInit  {


  constructor(public modalRef: MdbModalRef<IndividualsearchcourseComponent>) {}
om(){


}



ngOnInit(): void {
 
  this.om();
}

}
