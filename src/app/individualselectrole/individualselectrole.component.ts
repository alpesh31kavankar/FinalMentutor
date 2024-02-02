import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MenteeProfile, MentorProfile } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../Service';
@Component({
  selector: 'app-individualselectrole',
  templateUrl: './individualselectrole.component.html',
  styleUrls: ['./individualselectrole.component.scss']
})
export class IndividualselectroleComponent {
  mentorProfile: MentorProfile
  menteeProfile: MenteeProfile
  UId: any
  mentorProfileList: any[]
  menteeProfileList: any[]
  manteeList: any[]
  mainList: any[]
  MentorId: any
  MenteeId:any
  constructor(public modalRef: MdbModalRef<IndividualselectroleComponent>,private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
      this.mentorProfile = new MentorProfile();
      this.menteeProfile = new MenteeProfile();
      this.mentorProfileList = []
      this.menteeProfileList = []
      this.manteeList = []
      this.mainList = []
      this.MentorId = 0
      this.MenteeId=0
      
      this.route.params.subscribe((params) => {
        debugger
        this.UId = JSON.parse(localStorage.getItem('SID'));
        console.log("RegistrationId", this.UId)
      });
    }

    OnSubmit() {
      
      localStorage.removeItem('MentorId');
      
      localStorage.removeItem('MenteeId');
  
      this.service.GetAllMentorProfile().subscribe((result) => {
        // console.log(result);
        for (let data of result) {
          this.mentorProfileList.push(data);
        }
        console.log("mentorProfileList", this.mentorProfileList);
        this.mainList = this.mentorProfileList.filter(x => x.RegistrationId == this.UId);
        console.log("mainList", this.mainList);
        if (this.mainList.length == 1) {
  
          for (let data of this.mainList) {
            this.MentorId = data.MentorProfileId;
          }
          console.log("this.MentorId", this.MentorId);
          localStorage.setItem('MentorId', this.MentorId);
          this.router.navigateByUrl("/individualmentordashboard");
        }
        else {
          this.mentorProfile.RegistrationId = this.UId
          this.mentorProfile.JobTitle = ""
          this.mentorProfile.Company = ""
          this.mentorProfile.Address = ""
          this.mentorProfile.Industry = ""
          this.mentorProfile.HighestEducation = ""
          this.mentorProfile.AreaOfExpertise = ""
          this.mentorProfile.LanguagesSpoken = ""
          this.mentorProfile.Status = ""
  
          console.log("mentorProfile", this.mentorProfile);
          this.service.AddMentorProfile(this.mentorProfile).subscribe((result) => {
            if (result > 0) {
  
              alert('Saved Successfully.');
              localStorage.setItem('MentorId', result);
              this.router.navigateByUrl("/individualmentordashboard");
  
            }
            else {
              alert("Something went wrong! Please try again.")
            }
          });
  
        }
  
      })
  
    }
    OnSubmit1() {
      debugger
      localStorage.removeItem('MenteeId');
     
      localStorage.removeItem('MentorId');
      
      this.service.GetAllMenteeProfile().subscribe((result) => {
        // console.log(result);
        for (let data of result) {
          this.menteeProfileList.push(data);
        }
        console.log("menteeProfileList", this.menteeProfileList);
        this.manteeList = this.menteeProfileList.filter(x => x.RegistrationId == this.UId);
        console.log("manteeList", this.manteeList);
        if (this.manteeList.length == 1) {
  
          for (let i of this.manteeList) {
            console.log(i.MenteeProfileId,"i.MenteeProfileId")
            this.MenteeId = i.MenteeProfileId;
            localStorage.setItem('MenteeId', i.MenteeProfileId);
          }
          // console.log("this.MenteeId", this.MenteeId);
          // localStorage.setItem('MenteeId', this.MenteeId);
  
          this.router.navigateByUrl("/individualmenteesdashboard");
        }
        else {
  
          this.menteeProfile.RegistrationId = this.UId
          this.menteeProfile.JobTitle = ""
          this.menteeProfile.Industry = ""
          this.menteeProfile.YearsOfExperience = ""
          this.menteeProfile.TargetedDesignation = ""
          this.menteeProfile.Status = ""
  
          console.log("menteeProfile", this.menteeProfile);
          this.service.AddMenteeProfile(this.menteeProfile).subscribe((result) => {
            if (result > 0) {
  
              alert('Saved Successfully.');
              localStorage.setItem('MenteeId', result);
              this.router.navigateByUrl("/individualmenteesdashboard");
  
            }
            else {
              alert("Something went wrong! Please try again.")
            }
          });
  
        }
  
      })
  
    }

   

}
