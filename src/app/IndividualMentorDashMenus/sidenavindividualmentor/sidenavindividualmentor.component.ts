import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-sidenavindividualmentor',
  templateUrl: './sidenavindividualmentor.component.html',
  styleUrls: ['./sidenavindividualmentor.component.scss']
})
export class SidenavindividualmentorComponent {
  constructor(public modalRef: MdbModalRef<SidenavindividualmentorComponent>) {}
}
