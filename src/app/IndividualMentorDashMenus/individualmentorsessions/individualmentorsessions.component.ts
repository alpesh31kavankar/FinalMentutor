import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IndividualaddsessionComponent } from '../individualaddsession/individualaddsession.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';
import { Session } from 'src/app/Class';

@Component({
  selector: 'app-individualmentorsessions',
  templateUrl: './individualmentorsessions.component.html',
  styleUrls: ['./individualmentorsessions.component.scss']
})
export class IndividualmentorsessionsComponent {
  sessionList:any[]
  ActiveSessionList:any[]
  CloseSessionList:any[]
  session:Session
  maintodaySessionList:any[]
  todaySessionList:any[]
  tomorrowSessionList:any[]
  maintomorrowSessionList:any[]
  dayAfterTomorrowSessionList:any[]
  maindayAfterTomorrowSessionList:any[]

  SId:any
  imgPath: string = GlobalVariable.BASE_API_URL;
  modalRefAddsess: MdbModalRef<IndividualaddsessionComponent> | null = null;
  constructor(private modalService: MdbModalService,private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebService) {
      this.sessionList=[]
      this.ActiveSessionList=[]
      this.CloseSessionList=[]

      this.maintodaySessionList=[]
      this.todaySessionList=[]
      this.tomorrowSessionList = []
      this.maintomorrowSessionList = []
      this.dayAfterTomorrowSessionList = [] 
      this.maindayAfterTomorrowSessionList = []
      this.session = new Session();
      this.route.params.subscribe((params) => {
        debugger
      
        this.SId = JSON.parse(localStorage.getItem('MentorId'));
       
        console.log("SId", this.SId)
      });
    }

  openModalAddSession() {
    
    this.modalRefAddsess = this.modalService.open(IndividualaddsessionComponent , {
      
    modalClass: 'modal-xl'
    })
  }

  GetAllSession(){
    this.service.GetAllSession().subscribe((result) => {
      this.sessionList = []
      this.ActiveSessionList = []
      this.CloseSessionList = []
      for (let data of result) {
        this.sessionList.push(data);
      }
      console.log("sessionList", this.sessionList);
       this.ActiveSessionList=this.sessionList.filter(x => x.course.MentorProfileId== this.SId && x.Status=="Active") 
       console.log("ActiveSessionList", this.ActiveSessionList);
       this.CloseSessionList=this.sessionList.filter(x => x.course.MentorProfileId== this.SId && x.Status=="Close") 
    });
  }

todaySession(){
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = today.getDate().toString().padStart(2, '0');
  const year = today.getFullYear();
  
  const formattedDate = `${month}/${day}/${year}`;
  
  console.log(formattedDate);

  this.service.GetAllSession().subscribe((result) => {
    this.todaySessionList = []
   
    this.maintodaySessionList = []
    for (let data of result) {
      this.todaySessionList.push(data);
    }
    console.log("todaySessionList", this.todaySessionList);
     this.maintodaySessionList=this.todaySessionList.filter(x => x.course.MentorProfileId== this.SId && x.SessionDate==formattedDate&& x.Status!="Close") 
     
  });

}

tomorrowSession(){
  const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const month = (tomorrow.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
const day = tomorrow.getDate().toString().padStart(2, '0');
const year = tomorrow.getFullYear();

const formattedDate = `${month}/${day}/${year}`;

console.log(formattedDate);

  this.service.GetAllSession().subscribe((result) => {
    this.tomorrowSessionList = []
   
    this.maintomorrowSessionList = []
    for (let data of result) {
      this.tomorrowSessionList.push(data);
    }
    console.log("tomorrowSessionList", this.tomorrowSessionList);
     this.maintomorrowSessionList=this.tomorrowSessionList.filter(x => x.course.MentorProfileId== this.SId && x.SessionDate==formattedDate&& x.Status!="Close") 
     
  });

}


dayAfterTomorrow(){
  const today = new Date();
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);
  
  const month = (dayAfterTomorrow.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = dayAfterTomorrow.getDate().toString().padStart(2, '0');
  const year = dayAfterTomorrow.getFullYear();
  
  const dayAfterTomorrowDate = `${month}/${day}/${year}`;
  
  console.log(dayAfterTomorrowDate);
  this.service.GetAllSession().subscribe((result) => {
    this.dayAfterTomorrowSessionList = []
   
    this.maindayAfterTomorrowSessionList = []
    for (let data of result) {
      this.dayAfterTomorrowSessionList.push(data);
    }
    console.log("dayAfterTomorrowSessionList", this.dayAfterTomorrowSessionList);
     this.maindayAfterTomorrowSessionList=this.dayAfterTomorrowSessionList.filter(x => x.course.MentorProfileId== this.SId && x.SessionDate==dayAfterTomorrowDate && x.Status!="Close") 
     
  });

}


onStart(SessionId){
  this.service.GetSessionById(SessionId).subscribe((result) => {
       
    this.session = result;
    console.log("this.session",this.session);

    this.session.Status="onGoing"
    this.service.UpdateSession(this.session).subscribe((result) => {
      if (result == 0) {
        alert('Not updated!');

      } else {
        alert('updated successfully');
      }
    });

  });


}

onEnd(SessionId){
  this.service.GetSessionById(SessionId).subscribe((result) => {
       
    this.session = result;
    console.log("this.session",this.session);

    this.session.Status="Close"
    this.service.UpdateSession(this.session).subscribe((result) => {
      if (result == 0) {
        alert('Not updated!');

      } else {
        alert('updated successfully');
      }
    });

  });
}



  ngOnInit(): void {
   this.GetAllSession();
   this.todaySession();
   this.tomorrowSession();
   this.dayAfterTomorrow();
    
  }
}
