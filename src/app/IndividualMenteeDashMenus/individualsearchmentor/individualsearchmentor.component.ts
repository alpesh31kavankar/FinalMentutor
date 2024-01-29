import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-individualsearchmentor',
  templateUrl: './individualsearchmentor.component.html',
  styleUrls: ['./individualsearchmentor.component.scss']
})
export class IndividualsearchmentorComponent implements OnInit  {


  constructor(public modalRef: MdbModalRef<IndividualsearchmentorComponent>) {}
om(){


}



ngOnInit(): void {
 
  this.om();
}

}
