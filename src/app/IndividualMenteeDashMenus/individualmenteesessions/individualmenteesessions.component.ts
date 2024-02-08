import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedBack, MenteeSession, Session } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualmenteesessions',
  templateUrl: './individualmenteesessions.component.html',
  styleUrls: ['./individualmenteesessions.component.scss']
})
export class IndividualmenteesessionsComponent {
  sessionList: any[]
  ActiveSessionList: any[]
  CloseSessionList: any[]
  PurchaseCourseList: any[]
  MId: any
  ActiveCourseList: any[]
  menteeSessionList: any[]
  imgPath: string = GlobalVariable.BASE_API_URL;
  maintodaySessionList: any[]
  maintomorrowSessionList: any[]
  maindayAfterTomorrowSessionList: any[]
  menteeSession: MenteeSession;
  MenteeSessionList: any[]
  feedbackSessionList: any[]
  joinSessionList: any[]
  mainjoinSessionList:any[]
  SessionStatus:any
  feedBack:FeedBack
  session:Session

  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.sessionList = []
    this.ActiveSessionList = []
    this.CloseSessionList = []
    this.PurchaseCourseList = []
    this.ActiveCourseList = []
    this.menteeSessionList = []
    this.maintodaySessionList = []
    this.maintomorrowSessionList = []
    this.maindayAfterTomorrowSessionList = []
    this.MenteeSessionList = []
    this.feedbackSessionList = []
    this.joinSessionList = []
    this.mainjoinSessionList=[]
    this.SessionStatus=""
    this.menteeSession = new MenteeSession();
    this.feedBack = new FeedBack();
    this.session = new Session();
    this.route.params.subscribe((params) => {
      debugger

      this.MId = JSON.parse(localStorage.getItem('MenteeId'));

      console.log("MId", this.MId)
    });

  }

  GetAllSession() {
    // this.service.GetAllSession().subscribe((result) => {
    //   this.sessionList = []
    //   this.ActiveSessionList = []
    //   this.CloseSessionList = []
    //   for (let data of result) {
    //     this.sessionList.push(data);
    //   }
    //   console.log("sessionList", this.sessionList);
    //    this.ActiveSessionList=this.sessionList.filter(x => x.course.CourseId== this.SId && x.Status=="Active") 
    //    console.log("ActiveSessionList", this.ActiveSessionList);
    //    this.CloseSessionList=this.sessionList.filter(x => x.course.CourseId== this.SId && x.Status=="Close") 
    // });
  }

  GetAllPurchaseCourse() {
    this.service.GetAllPurchaseCourse().subscribe((result) => {
      // console.log(result);
      for (let data of result) {
        this.PurchaseCourseList.push(data);
      }
      this.ActiveCourseList = this.PurchaseCourseList.filter(x => x.MenteeProfileId == this.MId)
      console.log("this.ActiveCourseList", this.ActiveCourseList);


      this.service.GetAllSession().subscribe((result) => {
        // console.log(result);
        for (let data of result) {
          this.sessionList.push(data);
        }
        console.log(this.sessionList);

        console.log("this.ActiveCourseList.length", this.ActiveCourseList.length);
        if (this.ActiveCourseList.length > 0) {
          for (let data of this.ActiveCourseList) {

            this.menteeSessionList = this.sessionList.filter(x => x.course.CourseId == data.course.CourseId)
            console.log("menteeSessionList", this.menteeSessionList);
          }
          this.todaySession();
          this.tomorrowSession();
        } else {
          alert("you dont have any purchase course")
        }
      });
    });
  }



  todaySession() {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    console.log("todays date", formattedDate);
    this.maintodaySessionList = this.menteeSessionList.filter(x => x.SessionDate == formattedDate && x.Status != "Close")

  }

  tomorrowSession() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const month = (tomorrow.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = tomorrow.getDate().toString().padStart(2, '0');
    const year = tomorrow.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    console.log(formattedDate);

    console.log("tomorrow date", formattedDate);
    this.maintomorrowSessionList = this.menteeSessionList.filter(x => x.SessionDate == formattedDate && x.Status != "Close")

  }


  dayAfterTomorrow() {
    const today = new Date();
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    const month = (dayAfterTomorrow.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = dayAfterTomorrow.getDate().toString().padStart(2, '0');
    const year = dayAfterTomorrow.getFullYear();

    const dayAfterTomorrowDate = `${month}/${day}/${year}`;

    console.log(dayAfterTomorrowDate);
    this.maindayAfterTomorrowSessionList = this.menteeSessionList.filter(x => x.SessionDate == dayAfterTomorrowDate && x.Status != "Close")

  }


  onJoin(SessionId) {

    this.service.GetAllMenteeSession().subscribe((result) => {
      this.joinSessionList=[]
      this.mainjoinSessionList=[]
      // console.log(result);
      for (let data of result) {
        this.joinSessionList.push(data);
      }
      console.log("joinSessionList", this.joinSessionList);
      this.mainjoinSessionList = this.joinSessionList.filter(x => x.MenteeProfileId == this.MId && x.session.SessionId == SessionId)
      console.log("mainjoinSessionList", this.mainjoinSessionList);
      if (this.mainjoinSessionList.length == 1) {
        alert("already join")
      }else{
debugger
        // for (let data of this.mainjoinSessionList) {
        //   this.SessionStatus=data.session.Status
        // }
        this.service.GetSessionById(SessionId).subscribe((result) => {
       
          this.session = result;
          console.log(this.session);
      
          if( this.session.Status=="onGoing"){
            this.menteeSession.SessionId = SessionId
            this.menteeSession.Status = "InActive"
            this.menteeSession.MenteeProfileId = this.MId
            this.service.AddMenteeSession(this.menteeSession).subscribe((result) => {
              if (result > 0) {
                alert('Saved Successfully.');
              }
              else {
                alert("Something went wrong! Please try again.")
              }
            });
          }else{
            alert("session not start yet")
          }
        })
       
      }
    });
  }

  getAllMenteeSession() {
    this.service.GetAllMenteeSession().subscribe((result) => {
      this.MenteeSessionList=[]
      this.feedbackSessionList=[]
      // console.log(result);
      for (let data of result) {
        this.MenteeSessionList.push(data);
      }
      console.log("MenteeSessionList", this.MenteeSessionList);
      this.feedbackSessionList = this.MenteeSessionList.filter(x => x.MenteeProfileId == this.MId && x.session.Status == "Close" && x.Status == "InActive")
      console.log("feedbackSessionList", this.feedbackSessionList);
    });
  }

  onFeedback(SessionId,MenteeProfileId,MenteeSessionId){
    this.feedBack.Status="Done"
    this.feedBack.MentorStatus ="Done"
    this.feedBack.SessionId=SessionId
    this.feedBack.MenteeId=MenteeProfileId
    this.service.AddFeedBack(this.feedBack).subscribe((result) => {
      if (result > 0) {
          alert('Saved Successfully.');

          this.service.GetMenteeSessionById(MenteeSessionId).subscribe((result) => {
       
            this.menteeSession = result;
            console.log(this.menteeSession);
    
            this.menteeSession.Status="Active"

            this.service.UpdateMenteeSession(this.menteeSession).subscribe((result) => {
              console.log("hhh", result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                alert('Saved Successfully.');
                this.getAllMenteeSession()
              }
            });

          });

      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });
  }

  ngOnInit(): void {
    this.GetAllPurchaseCourse();
    this.getAllMenteeSession();
    // this.tomorrowSession();
    // this.dayAfterTomorrow();

  }

}
