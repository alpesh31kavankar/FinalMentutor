import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Course, MentorSkill, Skill } from 'src/app/Class';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualmentoraddcourses',
  templateUrl: './individualmentoraddcourses.component.html',
  styleUrls: ['./individualmentoraddcourses.component.scss']
})
export class IndividualmentoraddcoursesComponent implements OnInit  {
  course: Course
  mentorSkill:MentorSkill
  mentorSkillList:any[]
  courseList:any[]

  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor(public modalRef: MdbModalRef<IndividualmentoraddcoursesComponent>,private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
      this.course = new Course();
      this.course.mentorSkill = new MentorSkill();
      this.mentorSkillList=[]
      this.courseList=[]

  }

  OnSubmit() {
    this.course.MentorProfileId=1
    this.course.StartDate="2-2"
    this.course.EndDate="-4-4"
    this.course.Status="Active"
    console.log("course", this.course);
    this.service.AddCourse(this.course).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.course.Photo = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.course.Photo);
        this.service.SaveCourseImage(formData,result).subscribe(data => {
         
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
        this.course.Photo = this.filesToUpload[i].name;
    } 
    }

    
  GetAllMentorSkill() {
    this.mentorSkillList = []
    this.service.GetAllMentorSkill().subscribe((result) => {
      for (let data of result) {
        this.mentorSkillList.push(data);
      }
      console.log("mentorSkillList", this.mentorSkillList);
    });
  }

  GetAllCourse(){
    this.courseList=[]
    this.service.GetAllCourse().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.courseList.push(data);   
      }     
           console.log("courseList",this.courseList);
    });
  }
ngOnInit(): void {
  this.GetAllMentorSkill()
  this.GetAllCourse()
}

}
