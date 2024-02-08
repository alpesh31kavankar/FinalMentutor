import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MentorPlan, MentorProfile } from 'src/app/Class';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualmentorplans',
  templateUrl: './individualmentorplans.component.html',
  styleUrls: ['./individualmentorplans.component.scss']
})
export class IndividualmentorplansComponent {
  individualPlanList: any[];
  mentorPlan:MentorPlan
  mentorProfile:MentorProfile
  UId: any
  SId: any

  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient, private service: WebService) {
    this.mentorPlan = new MentorPlan();
    this.mentorProfile = new MentorProfile();
    this.individualPlanList = []
    this.GetAllIndividualPlan();

    this.route.params.subscribe((params) => {
      debugger
      this.UId = JSON.parse(localStorage.getItem('SID'));
      this.SId = JSON.parse(localStorage.getItem('MentorId'));
      console.log("UserId", this.UId)
      console.log("SId", this.SId)
    });

  }

  selectPlan(IndividualPlanId){
    this.mentorPlan.MentorProfileId=this.SId
    this.mentorPlan.IndividualPlanId=IndividualPlanId
    console.log("this.mentorPlan.IndividualPlanId",this.mentorPlan.IndividualPlanId)
    this.mentorPlan.Status="Active"
    console.log("mentorPlan",this.mentorPlan);
    this.service.AddMentorPlan(this.mentorPlan).subscribe((result) => {
      if (result > 0) {
      
         
          alert('Saved Successfully.');

          this.service.GetMentorProfileById(this.SId).subscribe((result) => {

            this.mentorProfile = result;
            console.log(this.mentorProfile);

            //update mentorProfile
            this.mentorProfile.Status="Active"
            this.service.UpdateMentorProfile(this.mentorProfile).subscribe((result) => {
              console.log("hhh", result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                alert('Saved Successfully.');
                this.router.navigateByUrl("/individualmentordashboard");
              }
            });


      });


           
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });
  }

  GetAllIndividualPlan() {
    this.individualPlanList = []
    this.service.GetAllIndividualPlan().subscribe((result) => {
      for (let data of result) {
        this.individualPlanList.push(data);
      }
      console.log("individualPlanList", this.individualPlanList);
    });
  }
}
