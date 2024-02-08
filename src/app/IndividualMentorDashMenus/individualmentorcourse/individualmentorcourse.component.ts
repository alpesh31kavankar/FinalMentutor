import { Component } from '@angular/core';
import { IndividualsearchcourseComponent } from '../../individualsearchcourse/individualsearchcourse.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IndividualmentoraddcoursesComponent } from '../individualmentoraddcourses/individualmentoraddcourses.component';
import { WebService } from 'src/app/Service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariable } from 'src/app/Global';
@Component({
  selector: 'app-individualmentorcourse',
  templateUrl: './individualmentorcourse.component.html',
  styleUrls: ['./individualmentorcourse.component.scss']
})
export class IndividualmentorcourseComponent {
  courseList:any[]
  mainCourseList:any[]
  SId:any
  imgPath: string = GlobalVariable.BASE_API_URL;
  
  modalRefWalkk: MdbModalRef<IndividualsearchcourseComponent> | null = null;
  modalRefWalkkadd: MdbModalRef<IndividualmentoraddcoursesComponent> | null = null;
  constructor(private modalService: MdbModalService,private service: WebService,private route: ActivatedRoute, private router: Router,
    private http: HttpClient) {
    this.courseList=[]
    this.mainCourseList=[]
    this.route.params.subscribe((params) => {
      debugger
    
      this.SId = JSON.parse(localStorage.getItem('MentorId'));
     
      console.log("SId", this.SId)
    });

this.GetAllCourse();
  }

  GetAllCourse(){
    this.courseList=[]
    this.service.GetAllCourse().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.courseList.push(data);   
      }     
           console.log("courseList",this.courseList);
           this.mainCourseList=this.courseList.filter(x => x.MentorProfileId== this.SId) 

    });
  }
  
  openModalSearchCourse() {
    
    this.modalRefWalkk = this.modalService.open(IndividualsearchcourseComponent , {
      
    modalClass: 'modal-xl'
    })
  }

  openModalAddCourse() {
    
    this.modalRefWalkkadd = this.modalService.open(IndividualmentoraddcoursesComponent , {
      
    modalClass: 'modal-xl'
    })
  }
  

}


