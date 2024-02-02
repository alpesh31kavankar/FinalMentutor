import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MentorProfile, MentorSkill, Registration, Skill } from 'src/app/Class';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualmentorprofile',
  templateUrl: './individualmentorprofile.component.html',
  styleUrls: ['./individualmentorprofile.component.scss']
})
export class IndividualmentorprofileComponent implements OnInit{

  UId: any
  SId: any
  mentorProfile: MentorProfile
  mentorSkill:MentorSkill
  skill:Skill
  registration:Registration;
  skillList:any[]

  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  Status:string

  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
       this.mentorProfile = new MentorProfile();
       this.mentorSkill=new MentorSkill()
    
       this.mentorSkill.skill = new Skill();
      this.skillList=[]

    this.route.params.subscribe((params) => {
      debugger
      this.UId = JSON.parse(localStorage.getItem('SID'));
      this.SId = JSON.parse(localStorage.getItem('MentorId'));
      console.log("UserId", this.UId)
      console.log("SId", this.SId)

      this.service.GetRegistrationById(this.UId).subscribe((result) => {
       
        this.registration = result;
        console.log(this.registration);

      });

      // this.service.GetUserDetailByRegistrationId(this.UId).subscribe((result) => {
       
      //   this.registration = result;
      //   console.log(this.registration);

      // });


    });
  }
         // to load modal css and js
         public loadScript() {
          let body = <HTMLDivElement> document.body;
          let script = document.createElement('script');
          script.innerHTML = '';
          script.src = '/assets/js/flickity.pkgd.min.js';
          script.async = true;
          script.defer = true;
          body.appendChild(script);
      }
  

      GetAllSkill() {
        this.skillList = []
        this.service.GetAllSkill().subscribe((result) => {
          for (let data of result) {
            this.skillList.push(data);
          }
          console.log("skillList", this.skillList);
        });
      }

      AddNewSkill(){
        this.mentorSkill.MentorProfileId=1
    console.log("MentorSkill", this.mentorSkill);
    this.service.AddMentorSkill(this.mentorSkill).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.mentorSkill.Certificate = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.mentorSkill.Certificate);
        this.service.SaveMentorSkillImage(formData,result).subscribe(data => {
         
          alert('Saved Successfully.');
        }); 
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });
      }
      fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this.selectedFileNames = [];
        for (let i = 0; i < this.filesToUpload.length; i++)
        {
            this.selectedFileNames.push(this.filesToUpload[i].name);
            this.mentorSkill.Certificate = this.filesToUpload[i].name;
        } 
        }

    ngOnInit(): void {
      this.loadScript();
      this.GetAllSkill()
      // this.openModal();
  
    }
}
