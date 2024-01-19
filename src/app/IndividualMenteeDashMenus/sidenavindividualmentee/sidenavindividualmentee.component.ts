import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';




@Component({
  selector: 'app-sidenavindividualmentee',
  templateUrl: './sidenavindividualmentee.component.html',
  styleUrls: ['./sidenavindividualmentee.component.scss']
})
export class SidenavindividualmenteeComponent {
  constructor(public modalRef: MdbModalRef<SidenavindividualmenteeComponent>) {}
}
