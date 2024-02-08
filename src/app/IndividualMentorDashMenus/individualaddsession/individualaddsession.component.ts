import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Course, Session } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualaddsession',
  templateUrl: './individualaddsession.component.html',
  styleUrls: ['./individualaddsession.component.scss']
})
export class IndividualaddsessionComponent implements OnInit  {

  session:Session
  course: Course
  courseList:any[]
  mainCourseList:any[]
  sessionList:any[]
  mainSessionList:any[]
  SId:any;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  imgPath: string = GlobalVariable.BASE_API_URL;
  
  constructor(public modalRef: MdbModalRef<IndividualaddsessionComponent>,private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebService,private datePipe: DatePipe) {
      this.session = new Session();
      this.session.course = new Course();
      this.courseList=[]
      this.mainCourseList=[]
      this.sessionList=[]
      this.mainSessionList=[]
      this.route.params.subscribe((params) => {
        debugger
      
        this.SId = JSON.parse(localStorage.getItem('MentorId'));
       
        console.log("SId", this.SId)
      });
    }

    OnSubmit() {
      const formattedDate = this.datePipe.transform(this.session.SessionDate, 'MM/dd/yyyy');
    
      // Update the SessionDate with the formatted date
      this.session.SessionDate = formattedDate || '';

      this.session.Status="Active"
      console.log("session", this.session);
      this.service.AddSession(this.session).subscribe((result) => {
        if (result > 0) {
          const formData = new FormData();
          this.session.Photo = this.filesToUpload[0].name;
          formData.append('uploadedImage',this.filesToUpload[0],this.session.Photo);
          this.service.SaveSessionImage(formData,result).subscribe(data => {
           
            alert('Saved Successfully.');
            this.GetAllSession();
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
          this.session.Photo = this.filesToUpload[i].name;
      } 
      }

   GetAllCourse() {
    this.courseList = []
    this.service.GetAllCourse().subscribe((result) => {
      for (let data of result) {
        this.courseList.push(data);
      }
      console.log("courseList", this.courseList);
      this.mainCourseList=this.courseList.filter(x => x.MentorProfileId== this.SId) 

    });
  }

  GetAllSession(){
  
    

    this.service.GetAllSession().subscribe((result) => {
      this.sessionList = []
      this.mainSessionList = []
      for (let data of result) {
        this.sessionList.push(data);
      }
      console.log("sessionList", this.sessionList);
       this.mainSessionList=this.sessionList.filter(x => x.course.MentorProfileId== this.SId) 

    });
  }

  individualmentorsessions(){
    this.router.navigateByUrl("/individualmentorsessions");
  }

ngOnInit(): void {
  this.GetAllCourse();
 this.GetAllSession();
  
}

}
