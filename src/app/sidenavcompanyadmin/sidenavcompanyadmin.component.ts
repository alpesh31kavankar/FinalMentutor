import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-sidenavcompanyadmin',
  templateUrl: './sidenavcompanyadmin.component.html',
  styleUrls: ['./sidenavcompanyadmin.component.scss']
})
export class SidenavcompanyadminComponent {
  constructor(public modalRef: MdbModalRef<SidenavcompanyadminComponent>) {}
}
