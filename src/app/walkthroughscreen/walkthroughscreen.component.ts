
import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-walkthroughscreen',
  templateUrl: './walkthroughscreen.component.html',
  styleUrls: ['./walkthroughscreen.component.scss']
})
export class WalkthroughscreenComponent implements OnInit  {


  constructor(public modalRef: MdbModalRef<WalkthroughscreenComponent>) {}
om(){


}



ngOnInit(): void {
 
  this.om();
}
}
