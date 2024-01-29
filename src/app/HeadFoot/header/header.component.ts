import { Component } from '@angular/core';
import { SelectrolemodalComponent } from '../../selectrolemodal/selectrolemodal.component';
import { SidenavcompanyadminComponent } from '../../sidenavcompanyadmin/sidenavcompanyadmin.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { SidenavindividualmenteeComponent } from '../../IndividualMenteeDashMenus/sidenavindividualmentee/sidenavindividualmentee.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  modalRef: MdbModalRef<SelectrolemodalComponent> | null = null;
  modalRefsidenav: MdbModalRef<SidenavcompanyadminComponent> | null = null;
  modalRefIndMenteesidenav: MdbModalRef<SidenavindividualmenteeComponent> | null = null;
 
  constructor(private modalService: MdbModalService,private router: Router) {}
  logout(){
    // localStorage.clear();
    // this.router.navigate(['Landingpage'])
  }
  openModal() {
    this.modalRef = this.modalService.open(SelectrolemodalComponent)
  }

  
  openCompanyAdminDashModalSidenav() {
    this.modalRefsidenav = this.modalService.open(SidenavcompanyadminComponent,  {
      modalClass: 'modal-dialog-scrollable modal-fullscreen sidebarmodel', nonInvasive: true,
    })
  }

  openMenteeDashModalSidenav() {
    this.modalRefIndMenteesidenav = this.modalService.open(SidenavindividualmenteeComponent,  {
      modalClass: 'modal-dialog-scrollable modal-fullscreen sidebarmodel', nonInvasive: true,
    })
  }
}
