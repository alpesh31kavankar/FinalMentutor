import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Course, MentorSkill, Skill } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';
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
mainCourseList:any[]
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  SId:any
 
mainMentorSkillList:any[]
imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(public modalRef: MdbModalRef<IndividualmentoraddcoursesComponent>,private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
      this.course = new Course();
      this.course.mentorSkill = new MentorSkill();
      this.mentorSkillList=[]
      this.mainCourseList=[]
      this.courseList=[]
      this.mainMentorSkillList=[]
      this.route.params.subscribe((params) => {
        debugger
      
        this.SId = JSON.parse(localStorage.getItem('MentorId'));
       
        console.log("SId", this.SId)
      });

  }

  OnSubmit() {
    this.courseList=[]
    this.mainCourseList=[]
    this.course.MentorProfileId= this.SId
  
    this.course.Status="Active"
    console.log("course", this.course);
    this.service.AddCourse(this.course).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.course.Photo = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.course.Photo);
        this.service.SaveCourseImage(formData,result).subscribe(data => {
         
          alert('Saved Successfully.');
          this.GetAllCourse()
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

      this.mainMentorSkillList=this.mentorSkillList.filter(x => x.MentorProfileId== this.SId) 

    });
  }

  GetAllCourse(){
   
    this.service.GetAllCourse().subscribe((result) => {
      this.courseList=[]
      this.mainCourseList=[]
      // console.log(result);
      for(let data of result){
          this.courseList.push(data);   
      }     
           console.log("courseList",this.courseList);
           this.mainCourseList=this.courseList.filter(x => x.MentorProfileId== this.SId) 

    });
  }
ngOnInit(): void {
  this.GetAllMentorSkill()
  this.GetAllCourse()
}

}
