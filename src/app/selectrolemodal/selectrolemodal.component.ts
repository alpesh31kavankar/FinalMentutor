import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-selectrolemodal',
  templateUrl: './selectrolemodal.component.html',
  styleUrls: ['./selectrolemodal.component.scss']
})
export class SelectrolemodalComponent {
  constructor(public modalRef: MdbModalRef<SelectrolemodalComponent>) {}
}
