import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MenteeProfile, Registration, UserDetail } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';
import { WebService } from 'src/app/Service';




@Component({
  selector: 'app-sidenavindividualmentee',
  templateUrl: './sidenavindividualmentee.component.html',
  styleUrls: ['./sidenavindividualmentee.component.scss']
})
export class SidenavindividualmenteeComponent {
  UId: any
  SId: any
  registration:Registration
  menteeProfile: MenteeProfile 
  userDetailsList:any
  userDetailmainList:any[]
  userDetailId:any
  userDetail:UserDetail
  imgPath: string = GlobalVariable.BASE_API_URL;
  
  constructor(public modalRef: MdbModalRef<SidenavindividualmenteeComponent>,private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
      this.menteeProfile = new MenteeProfile();
      this.userDetail = new UserDetail();
      this.userDetailsList=[]
      this.userDetailmainList=[]
    
    this.route.params.subscribe((params) => {
      debugger
      this.UId = JSON.parse(localStorage.getItem('SID'));
      this.SId = JSON.parse(localStorage.getItem('MenteeId'));
      console.log("UserId", this.UId)
      console.log("SId", this.SId)
    });
    this.service.GetRegistrationById(this.UId).subscribe((result) => {

      this.registration = result;
      console.log(this.registration);
    })
    this.service.GetMenteeProfileById(this.SId).subscribe((result) => {

      this.menteeProfile = result;
      console.log("this.menteeProfile",this.menteeProfile);
    })
    this.GetAllUserDetail();

    }

    individualmenteementor(){
      this.router.navigateByUrl("/individualmenteementor");
    }

    individualmenteecourses(){

        if(this.menteeProfile.Status=="Active"){
          this.router.navigateByUrl("/individualmenteecourses");
        }
        else{
          alert("please Purchase Plan")
        }

      // this.router.navigateByUrl("/individualmentorcourse");
    }

    individualmenteesessions(){

        if(this.menteeProfile.Status=="Active"){
          this.router.navigateByUrl("/individualmenteesessions");
        }
        else{
          alert("please Purchase Plan")
        }

      // this.router.navigateByUrl("/individualmentorsessions");
    }
    
    individualmenteebusinessassociate(){

        if(this.menteeProfile.Status=="Active"){
          this.router.navigateByUrl("/individualmenteebusinessassociate");
        }
        else{
          alert("please Purchase Plan")
        }
      // this.router.navigateByUrl("/individualmentorcontent");
    }

    content(){

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
        else{
    alert("error")
        }
      })
    }

}
