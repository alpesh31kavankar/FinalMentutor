import { Component, OnInit } from '@angular/core';
import { IndividualsearchcourseComponent } from '../../individualsearchcourse/individualsearchcourse.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-individualmenteecourses',
  templateUrl: './individualmenteecourses.component.html',
  styleUrls: ['./individualmenteecourses.component.scss']
})
export class IndividualmenteecoursesComponent implements OnInit{
  purchaseCourseList:any[]
  mainpurchaseCourseList:any[]
  SId:any
  imgPath: string = GlobalVariable.BASE_API_URL;
  
  modalRefWalkk: MdbModalRef<IndividualsearchcourseComponent> | null = null;
  constructor(private modalService: MdbModalService,private route: ActivatedRoute,private router: Router, private http: HttpClient, private service: WebService) {
    this.purchaseCourseList=[]
    this.mainpurchaseCourseList=[]
    this.route.params.subscribe((params) => {
      debugger
      // this.UId = JSON.parse(localStorage.getItem('SID'));
      this.SId = JSON.parse(localStorage.getItem('MenteeId'));
      // console.log("UserId", this.UId)
      console.log("SId", this.SId)

    })
  }

  
  openModalSearchCourse() {
    
    this.modalRefWalkk = this.modalService.open(IndividualsearchcourseComponent , {
      
    modalClass: 'modal-xl'
    })
  }

  purchaseCourse(CourseId): void{
    try {
      this.router.navigateByUrl("/individualmenteespurchasecourse/" + CourseId);
    } catch (error) {
      alert("certi-" + error);
    } 
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


  GetAllPurchaseCourse(){
    this.service.GetAllPurchaseCourse().subscribe((result) => {
      this.purchaseCourseList=[]
      this.mainpurchaseCourseList=[]
      console.log(result);
      for(let data of result){
          this.purchaseCourseList.push(data);   
      }     
           console.log("purchaseCourseList",this.purchaseCourseList);
           this.mainpurchaseCourseList=this.purchaseCourseList.filter(x => x.MenteeProfileId== this.SId) 
           console.log("mainpurchaseCourseList",this.mainpurchaseCourseList);
    });
  }

  ngOnInit(): void {
    this.loadScript();
 this.GetAllPurchaseCourse();
    // this.openModal();

  }
}
