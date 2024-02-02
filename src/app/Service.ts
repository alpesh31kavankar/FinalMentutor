import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { GlobalVariable } from './Global';
import { Course, FeedBack, Login, MenteeProfile, MenteeSkill, MentorPlan, MentorProfile, MentorSkill, Registration, Session, UserDetail } from './Class';

@Injectable({
    providedIn: 'root'
})


export class WebService {


    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": 'GET, POST, OPTIONS, DELETE,PUT',
            "Content-Security-Policy": 'upgrade-insecure-requests'
        })
    };

    IsLogin: any;
    constructor(private http: HttpClient) {
        this.IsLogin = false;
    }


    //Login
    Login(Email, Password): Observable<any> {
        return this.http.get<Login>(GlobalVariable.SERVICE_API_URL + "Registration/Login?Email=" + Email + "&Password=" + Password);
    }



    //Session
    AddSession(Session): Observable<any> {
        return this.http.post<Session>(GlobalVariable.SERVICE_API_URL + "Session/AddSession", Session, this.httpOptions);
    }
    GetAllSession() {
        return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "Session/GetAllSession", this.httpOptions);
    }
    DeleteSession(Id): Observable<any> {
        return this.http.delete<any>(GlobalVariable.SERVICE_API_URL + "Session/DeleteSession?Id=" + Id, this.httpOptions);
    }
    GetSessionById(Id): Observable<any> {
        return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "Session/GetSessionById?Id=" + Id, this.httpOptions);
    }
    UpdateSession(Session): Observable<any> {
        return this.http.post<Session>(GlobalVariable.SERVICE_API_URL + "Session/UpdateSession", Session, this.httpOptions);
    }
    // SaveSkillImage(formdata,Id): Observable<any> {
    //   const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"SubCategory/SaveSkillImage?Id="+Id, formdata, null );
    //   return this.http.request(uploadReq);
    // }

    //Registration
    AddRegistration(Registration): Observable<any> {
        return this.http.post<Registration>(GlobalVariable.SERVICE_API_URL + "Registration/AddRegistration", Registration, this.httpOptions);
    }
    GetAllRegistration() {
        return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "Registration/GetAllRegistration", this.httpOptions);
    }
    GetRegistrationByEmail(Email){
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetRegistrationByEmail?Email="+Email,this.httpOptions);
      }

      SendOTPEmail(Email){
        return this.http.post<any>(GlobalVariable.SERVICE_API_URL +"Registration/SendOTPEmail?Email="+Email,this.httpOptions);
      }
      DeleteRegistration(RegistrationId): Observable<any> {
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Registration/DeleteRegistration?RegistrationId="+RegistrationId,this.httpOptions);
      }
      GetRegistrationById(RegistrationId): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetRegistrationById?RegistrationId=" +RegistrationId, this.httpOptions);
      }
      UpdateRegistration(Registration): Observable<any> {
        return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/UpdateRegistration",Registration, this.httpOptions);
      } 

    //MenteeSkill
    AddMenteeSkill(MenteeSkill): Observable<any> {
        return this.http.post<MenteeSkill>(GlobalVariable.SERVICE_API_URL + "MenteeSkill/AddMenteeSkill", MenteeSkill, this.httpOptions);
    }
    GetAllMenteeSkill() {
        return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "MenteeSkill/GetAllMenteeSkill", this.httpOptions);
    }
    DeleteMenteeSkill(MenteeSkillId): Observable<any> {
        return this.http.delete<any>(GlobalVariable.SERVICE_API_URL + "MenteeSkill/DeleteMenteeSkill?MenteeSkillId="+MenteeSkillId, this.httpOptions);
    }
    GetMenteeSkillById(Id): Observable<any> {
        return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "MenteeSkill/GetMenteeSkillById?Id=" + Id, this.httpOptions);
    }
    UpdateMenteeSkill(MenteeSkill): Observable<any> {
        return this.http.post<MenteeSkill>(GlobalVariable.SERVICE_API_URL + "MenteeSkill/UpdateMenteeSkill", MenteeSkill, this.httpOptions);
    }

    // MentorSkill
    AddMentorSkill(MentorSkill): Observable<any> {
        return this.http.post<MentorSkill>(GlobalVariable.SERVICE_API_URL + "MentorSkill/AddMentorSkill", MentorSkill, this.httpOptions);
    }
    GetAllMentorSkill() {
        return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "MentorSkill/GetAllMentorSkill", this.httpOptions);
    }
    DeleteMentorSkill(MentorSkillId): Observable<any> {
        return this.http.delete<any>(GlobalVariable.SERVICE_API_URL + "MentorSkill/DeleteMentorSkill?MentorSkillId=" + MentorSkillId, this.httpOptions);
    }
    GetMentorSkillById(MentorSkillId): Observable<any> {
        return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "MentorSkill/GetMentorSkillById?MentorSkillId=" + MentorSkillId, this.httpOptions);
    }
    UpdateMentorSkill(MentorSkill): Observable<any> {
        return this.http.post<MentorSkill>(GlobalVariable.SERVICE_API_URL + "MentorSkill/UpdateMentorSkill", MentorSkill, this.httpOptions);
    }
    SaveMentorSkillImage(formdata, MentorSkillId): Observable<any> {
        const uploadReq = new HttpRequest('Post', GlobalVariable.SERVICE_API_URL + "MentorSkill/SaveMentorSkillImage?MentorSkillId=" + MentorSkillId, formdata, null);
        return this.http.request(uploadReq);
    }


 // MentorSkill
 AddMentorPlan(MentorPlan): Observable<any> {
    return this.http.post<MentorPlan>(GlobalVariable.SERVICE_API_URL + "MentorPlan/AddMentorPlan", MentorPlan, this.httpOptions);
}
// GetAllMentorSkill() {
//     return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "MentorSkill/GetAllMentorSkill", this.httpOptions);
// }
// DeleteMentorSkill(Id): Observable<any> {
//     return this.http.delete<any>(GlobalVariable.SERVICE_API_URL + "MentorSkill/DeleteMentorSkill?Id=" + Id, this.httpOptions);
// }
// GetMentorSkillById(Id): Observable<any> {
//     return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "MentorSkill/GetMentorSkillById?Id=" + Id, this.httpOptions);
// }
// UpdateMentorSkill(MentorSkill): Observable<any> {
//     return this.http.post<MentorSkill>(GlobalVariable.SERVICE_API_URL + "MentorSkill/UpdateMentorSkill", MentorSkill, this.httpOptions);
// }

//AddFeedBack
AddFeedBack(FeedBack): Observable<any> {
    return this.http.post<FeedBack>(GlobalVariable.SERVICE_API_URL + "FeedBack/AddFeedBack", FeedBack, this.httpOptions);
}
 GetAllFeedBack() {
    return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "FeedBack/GetAllFeedBack", this.httpOptions);
}
DeleteFeedBack(FeedBackId): Observable<any> {
    return this.http.delete<any>(GlobalVariable.SERVICE_API_URL + "FeedBack/DeleteFeedBack?FeedBackId=" + FeedBackId, this.httpOptions);
}
// GetMentorSkillById(Id): Observable<any> {
//     return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "MentorSkill/GetMentorSkillById?Id=" + Id, this.httpOptions);
// }
// UpdateMentorSkill(MentorSkill): Observable<any> {
//     return this.http.post<MentorSkill>(GlobalVariable.SERVICE_API_URL + "MentorSkill/UpdateMentorSkill", MentorSkill, this.httpOptions);
// }


//AddUserDetail
AddUserDetail(UserDetail): Observable<any> {
        return this.http.post<UserDetail>(GlobalVariable.SERVICE_API_URL + "UserDetail/AddUserDetail", UserDetail, this.httpOptions);
    }
    GetAllUserDetail() {
        return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "UserDetail/GetAllUserDetail", this.httpOptions);
    }
    DeleteUserDetail(UserDetailId): Observable<any> {
        return this.http.delete<any>(GlobalVariable.SERVICE_API_URL + "UserDetail/DeleteUserDetail?UserDetailId=" + UserDetailId, this.httpOptions);
    }
    GetUserDetailById(UserDetailId): Observable<any> {
        return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "UserDetail/GetUserDetailById?UserDetailId=" + UserDetailId, this.httpOptions);
    }
    UpdateUserDetail(UserDetail): Observable<any> {
        return this.http.post<UserDetail>(GlobalVariable.SERVICE_API_URL + "UserDetail/UpdateUserDetail", UserDetail, this.httpOptions);
    }
    SaveUserDetailImage(formdata,UserDetailId): Observable<any> {
      const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"UserDetail/SaveUserDetailImage?UserDetailId="+UserDetailId, formdata, null );
      return this.http.request(uploadReq);
    }


//MenteeProfile
AddMenteeProfile(MenteeProfile): Observable<any> {
    return this.http.post<MenteeProfile>(GlobalVariable.SERVICE_API_URL + "MenteeProfile/AddMenteeProfile", MenteeProfile, this.httpOptions);
}
// GetAllUserDetail() {
//     return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "UserDetail/GetAllUserDetail", this.httpOptions);
// }
// DeleteUserDetail(UserDetailId): Observable<any> {
//     return this.http.delete<any>(GlobalVariable.SERVICE_API_URL + "UserDetail/DeleteUserDetail?UserDetailId=" + UserDetailId, this.httpOptions);
// }
// GetUserDetailById(UserDetailId): Observable<any> {
//     return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "UserDetail/GetUserDetailById?UserDetailId=" + UserDetailId, this.httpOptions);
// }
// UpdateUserDetail(UserDetail): Observable<any> {
//     return this.http.post<UserDetail>(GlobalVariable.SERVICE_API_URL + "UserDetail/UpdateUserDetail", UserDetail, this.httpOptions);
// }

//MenteeProfile
AddMentorProfile(MentorProfile): Observable<any> {
    return this.http.post<MentorProfile>(GlobalVariable.SERVICE_API_URL + "MentorProfile/AddMentorProfile", MentorProfile, this.httpOptions);
}


//Skill
GetAllSkill() {
    return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "Skill/GetAllSkill", this.httpOptions);
}


  //Course
  GetAllCourse() {
    return this.http.get<any>(GlobalVariable.SERVICE_API_URL + "Course/GetAllCourse", this.httpOptions);
}
AddCourse(Course): Observable<any> {
    return this.http.post<Course>(GlobalVariable.SERVICE_API_URL + "Course/AddCourse", Course, this.httpOptions);
}
SaveCourseImage(formdata, CourseId): Observable<any> {
    const uploadReq = new HttpRequest('Post', GlobalVariable.SERVICE_API_URL + "Course/SaveCourseImage?CourseId=" + CourseId, formdata, null);
    return this.http.request(uploadReq);
}


}
