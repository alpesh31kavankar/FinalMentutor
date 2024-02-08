import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenteePlan, MenteeProfile } from 'src/app/Class';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualmenteeplans',
  templateUrl: './individualmenteeplans.component.html',
  styleUrls: ['./individualmenteeplans.component.scss']
})
export class IndividualmenteeplansComponent {

  individualPlanList: any[];
  menteePlan:MenteePlan
  menteeProfile:MenteeProfile
  UId: any
  SId: any

  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient, private service: WebService) {
    this.menteePlan = new MenteePlan();
    this.menteeProfile = new MenteeProfile();
    this.individualPlanList = []
    this.GetAllIndividualPlan();

    this.route.params.subscribe((params) => {
      debugger
      this.UId = JSON.parse(localStorage.getItem('SID'));
      this.SId = JSON.parse(localStorage.getItem('MenteeId'));
      console.log("UserId", this.UId)
      console.log("SId", this.SId)
    });

  }

  selectPlan(IndividualPlanId){
    this.menteePlan.MenteeProfileId=this.SId
    this.menteePlan.IndividualPlanId=IndividualPlanId
    console.log("this.menteePlan.IndividualPlanId",this.menteePlan.IndividualPlanId)
    this.menteePlan.Status="Active"
    console.log("mentorPlan",this.menteePlan);
    this.service.AddMenteePlan(this.menteePlan).subscribe((result) => {
      if (result > 0) {
      
         
          alert('Saved Successfully.');

          this.service.GetMenteeProfileById(this.SId).subscribe((result) => {

            this.menteeProfile = result;
            console.log(this.menteeProfile);

            //update mentorProfile
            this.menteeProfile.Status="Active"
            this.service.UpdateMenteeProfile(this.menteeProfile).subscribe((result) => {
              console.log("hhh", result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                alert('Saved Successfully.');
                this.router.navigateByUrl("/individualmenteesdashboard");
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
