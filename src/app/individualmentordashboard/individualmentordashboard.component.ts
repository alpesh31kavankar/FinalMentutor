import { Component, OnInit } from '@angular/core';
// import { SidenavcompanyadminComponent } from '../sidenavcompanyadmin/sidenavcompanyadmin.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Chart, registerables } from 'chart.js';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../Service';
import { MentorProfile } from '../Class';
Chart.register(...registerables);
declare const $: any;

@Component({
  selector: 'app-individualmentordashboard',
  templateUrl: './individualmentordashboard.component.html',
  styleUrls: ['./individualmentordashboard.component.scss']
})
export class IndividualmentordashboardComponent implements OnInit {

  UId: any
  SId: any
  mentorProfile: MentorProfile
  courseList: any[]
  mainCourseList:any[]
  noOfCourse:number
  noOfSession:number
  sessionList:any[]
  mainSessionList:any[]

  constructor(private modalService: MdbModalService, private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.mentorProfile = new MentorProfile();
    this.noOfCourse=0
    this.noOfSession=0
    this.sessionList=[]
    this.route.params.subscribe((params) => {
      debugger
      this.UId = JSON.parse(localStorage.getItem('SID'));
      this.SId = JSON.parse(localStorage.getItem('MentorId'));
      console.log("UserId", this.UId)
      console.log("SId", this.SId)
    });

    this.GetAllCourse()
    this.GetAllSession()
  }

  GetAllCourse() {
    this.service.GetAllCourse().subscribe((result) => {
      this.courseList = []
      this.mainCourseList=[]
      this.noOfCourse=0
      // console.log(result);
      for (let data of result) {
        this.courseList.push(data);
      }
      console.log(this.courseList);
      this.mainCourseList = this.courseList.filter(x => x.MentorProfileId == this.SId);
      this.noOfCourse= this.mainCourseList.length
      console.log("this.mainCourseList.length()",this.mainCourseList.length);
    });
  }

  GetAllSession(){
    this.service.GetAllSession().subscribe((result) => {
      this.sessionList = []
      this.mainSessionList=[]
      this.noOfSession=0
      // console.log(result);
      for (let data of result) {
        this.sessionList.push(data);
      }
      console.log(this.sessionList);
      this.mainSessionList = this.sessionList.filter(x => x.course.MentorProfileId == this.SId && x.Status== "Close");
      this.noOfSession= this.mainSessionList.length

     
    });
  }


  // to load modal css and js
  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '/assets/js/flickity.pkgd.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit(): void {
    this.loadScript();
    this.Chartshow();
    // this.openModal();

  }

  Chartshow() {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  aaa() {

  }
}
