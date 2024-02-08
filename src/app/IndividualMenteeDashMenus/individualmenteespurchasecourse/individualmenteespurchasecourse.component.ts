import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, PurchaseCourse } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualmenteespurchasecourse',
  templateUrl: './individualmenteespurchasecourse.component.html',
  styleUrls: ['./individualmenteespurchasecourse.component.scss']
})
export class IndividualmenteespurchasecourseComponent {
  Id:any
  SId:any
  course:Course
  sessionList:any[]
  mainSessionList:any[]
  purchaseCourse:PurchaseCourse
  purchaseCourseList:any[]
  mainpurchaseCourseList:any[]

  imgPath: string = GlobalVariable.BASE_API_URL;
  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient, private service: WebService) {

    this.course = new Course();
this.sessionList=[]
this.mainSessionList=[]
this.GetAllSession();
this.purchaseCourseList=[]
this.mainpurchaseCourseList=[]

this.purchaseCourse = new PurchaseCourse();
    this.route.params.subscribe((params) => {
      this.Id = params['CourseId'];
      this.SId = JSON.parse(localStorage.getItem('MenteeId'));
      this.service.GetCourseById(this.Id).subscribe((result) => {
     
        this.course = result;
        console.log(this.course);

      });
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
      this.mainSessionList=this.sessionList.filter(x => x.course.CourseId== this.Id) 

    });
  }

  PurchaseCourse(){

    this.service.GetAllPurchaseCourse().subscribe((result) => {
      this.purchaseCourseList=[]
      this.mainpurchaseCourseList=[]
      // console.log(result);
      for(let data of result){
          this.purchaseCourseList.push(data);   
      }     
           console.log("purchaseCourseList",this.purchaseCourseList);
           this.mainpurchaseCourseList=this.purchaseCourseList.filter(x => x.MenteeProfileId== this.SId && x.course.CourseId==this.Id) 
  if(this.mainpurchaseCourseList.length==1){
    alert("already purchase")
    this.router.navigateByUrl("/individualmenteecourses");
  }
else{
  this.purchaseCourse.MenteeProfileId=this.SId 
  this.purchaseCourse.CourseId= this.Id
  this.purchaseCourse.PaymentStatus="InActive"
  this.purchaseCourse.Status="Active"

  this.service.AddPurchaseCourse(this.purchaseCourse).subscribe((result) => {
    if (result > 0) {
        alert('Purchase Successfully.');
        
        this.router.navigateByUrl("/individualmenteecourses");
    }
    else {
      alert("Something went wrong! Please try again.")
    }
  });
}
   
  });

  }


}
