import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-individualselectrole',
  templateUrl: './individualselectrole.component.html',
  styleUrls: ['./individualselectrole.component.scss']
})
export class IndividualselectroleComponent {
  constructor(public modalRef: MdbModalRef<IndividualselectroleComponent>) {}
}
