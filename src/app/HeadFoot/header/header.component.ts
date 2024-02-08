import { Component } from '@angular/core';
import { SelectrolemodalComponent } from '../../selectrolemodal/selectrolemodal.component';
import { SidenavcompanyadminComponent } from '../../sidenavcompanyadmin/sidenavcompanyadmin.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { SidenavindividualmenteeComponent } from '../../IndividualMenteeDashMenus/sidenavindividualmentee/sidenavindividualmentee.component';
import { SidenavindividualmentorComponent } from '../../IndividualMentorDashMenus/sidenavindividualmentor/sidenavindividualmentor.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service';
import { MentorProfile, Registration, UserDetail } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  modalRef: MdbModalRef<SelectrolemodalComponent> | null = null;
  modalRefsidenav: MdbModalRef<SidenavcompanyadminComponent> | null = null;
  modalRefIndMenteesidenav: MdbModalRef<SidenavindividualmenteeComponent> | null = null;
  modalRefIndMentorsidenav: MdbModalRef<SidenavindividualmentorComponent> | null = null;
  UId: any
  SId: any
  registration:Registration;
  mentorProfile:MentorProfile
  userDetail: UserDetail
  userDetailsList:any[]
  userDetailmainList:any[]
  userDetailId:any
  MId:number
 companyId:number
  imgPath: string = GlobalVariable.BASE_API_URL;
  constructor(private modalService: MdbModalService,private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
this.registration=new Registration();
this.userDetail=new UserDetail();
       this.registration.FName=""
       this.userDetail.Photo=""
       this.userDetailsList=[]
       this.userDetailmainList=[]
    this.route.params.subscribe((params) => {
      debugger
      this.companyId=0
      this.UId = JSON.parse(localStorage.getItem('SID'));
      this.SId = JSON.parse(localStorage.getItem('MentorId'));
      this.MId = JSON.parse(localStorage.getItem('MenteeId'));
      console.log("UserId", this.UId)
      console.log("SId", this.SId)

      this.service.GetRegistrationById(this.UId).subscribe((result) => {
       
        this.registration = result;
        console.log(this.registration);

      });
  //     this.service.GetMentorProfileById(this.SId).subscribe((result) => {

  //       this.mentorProfile = result;
  //       console.log(this.mentorProfile);
  // });
  this.GetAllUserDetail()
    })



  }


  GetAllUserDetail(){
    this.service.GetAllUserDetail().subscribe((result) => {
      this.userDetailsList=[]
      this.userDetailmainList=[]
      // console.log(result);
      for(let data of result){
          this.userDetailsList.push(data);   
      }
      this.userDetailmainList= this.userDetailsList.filter(x => x.RegistrationId==this.UId);
      console.log("userDetailmainList",this.userDetailmainList);
      if(this.userDetailmainList.length==1){
        // this.router.navigateByUrl("/SelectRole"); 
        for(let data of this.userDetailmainList){
          this.userDetailId=data.UserDetailId
        }
        this.service.GetUserDetailById(this.userDetailId).subscribe((result) => {
  
          this.userDetail = result;
          console.log(this.userDetail);
        });
        
      }
     
    })
  }


  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/individuallogin");
    
    
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

  openMentorDashModalSidenav() {
    this.modalRefIndMentorsidenav = this.modalService.open(SidenavindividualmentorComponent,  {
      modalClass: 'modal-dialog-scrollable modal-fullscreen sidebarmodel', nonInvasive: true,
    })
  }
}
