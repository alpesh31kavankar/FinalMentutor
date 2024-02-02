import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-individualaddsession',
  templateUrl: './individualaddsession.component.html',
  styleUrls: ['./individualaddsession.component.scss']
})
export class IndividualaddsessionComponent implements OnInit  {


  constructor(public modalRef: MdbModalRef<IndividualaddsessionComponent>) {}
om(){


}



ngOnInit(): void {
 
  this.om();
}

}
