import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MentorProfile, Registration, UserDetail } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';
import { WebService } from 'src/app/Service';
@Component({
  selector: 'app-sidenavindividualmentor',
  templateUrl: './sidenavindividualmentor.component.html',
  styleUrls: ['./sidenavindividualmentor.component.scss']
})
export class SidenavindividualmentorComponent {
  UId: any
  SId: any
  mentorProfile: MentorProfile 
  registration:Registration
  userDetailsList:any
  userDetailmainList:any[]
  userDetailId:any
  userDetail:UserDetail
  imgPath: string = GlobalVariable.BASE_API_URL;
  constructor(public modalRef: MdbModalRef<SidenavindividualmentorComponent>,private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
      this.mentorProfile = new MentorProfile();
      this.userDetail = new UserDetail();
      this.userDetailsList=[]
      this.userDetailmainList=[]
      this.GetAllUserDetail()
    this.route.params.subscribe((params) => {
      debugger
      this.UId = JSON.parse(localStorage.getItem('SID'));
      this.SId = JSON.parse(localStorage.getItem('MentorId'));
      console.log("UserId", this.UId)
      console.log("SId", this.SId)
    });
    this.service.GetRegistrationById(this.UId).subscribe((result) => {

      this.registration = result;
      console.log(this.registration);
    })
    this.service.GetMentorProfileById(this.SId).subscribe((result) => {

      this.mentorProfile = result;
      console.log(this.mentorProfile);
    })

    }

    individualmentormentees(){
      this.router.navigateByUrl("/individualmentormentees");
    }

    individualmentorcourse(){

        if(this.mentorProfile.Status=="Active"){
          this.router.navigateByUrl("/individualmentorcourse");
        }
        else{
          alert("please Purchase Plan")
        }

      // this.router.navigateByUrl("/individualmentorcourse");
    }

    individualmentorsessions(){

        if(this.mentorProfile.Status=="Active"){
          this.router.navigateByUrl("/individualmentorsessions");
        }
        else{
          alert("please Purchase Plan")
        }

      // this.router.navigateByUrl("/individualmentorsessions");
    }
    
    individualmentorcontent(){

        if(this.mentorProfile.Status=="Active"){
          this.router.navigateByUrl("/individualmentorcontent");
        }
        else{
          alert("please Purchase Plan")
        }
      // this.router.navigateByUrl("/individualmentorcontent");
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
