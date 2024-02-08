import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { WebService } from '../Service';
import { GlobalVariable } from '../Global';


@Component({
  selector: 'app-individualsearchcourse',
  templateUrl: './individualsearchcourse.component.html',
  styleUrls: ['./individualsearchcourse.component.scss']
})
export class IndividualsearchcourseComponent implements OnInit  {
  courseList:any[]
  imgPath: string = GlobalVariable.BASE_API_URL;
  
  constructor(public modalRef: MdbModalRef<IndividualsearchcourseComponent>,private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.courseList=[]
  }

GetAllCourse(){
  this.courseList=[]
  this.service.GetAllCourse().subscribe((result) => {
    // console.log(result);
    for(let data of result){
        this.courseList.push(data);   
    }     
         console.log("courseList",this.courseList);
        //  this.mainCourseList=this.courseList.filter(x => x.MentorProfileId== this.SId) 

  });
}


purchaseCourse(CourseId): void{
  try {
    this.router.navigateByUrl("/individualmenteespurchasecourse/" + CourseId);
  } catch (error) {
    alert("certi-" + error);
  } 
}

ngOnInit(): void {
 
  this.GetAllCourse();
}

}
