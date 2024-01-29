import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { HeaderComponent } from './HeadFoot/header/header.component';
import { FooterComponent } from './HeadFoot/footer/footer.component';
import { LoginComponent } from './Registration/login/login.component';
import { SignupComponent } from './Registration/signup/signup.component';
import { LandingpageComponent } from './Starting/landingpage/landingpage.component';
import { SelectrolemodalComponent } from './selectrolemodal/selectrolemodal.component';
import { WalkthroughscreenComponent } from './walkthroughscreen/walkthroughscreen.component';
import { CompanyadmindashboardComponent } from './companyadmindashboard/companyadmindashboard.component';
import { CompanyadminmentorComponent } from './CompanyAdminDashMenus/companyadminmentor/companyadminmentor.component';
import { MentordetailsComponent } from './CompanyAdminDashMenus/mentordetails/mentordetails.component';
import { UserdetailsComponent } from './Registration/userdetails/userdetails.component';
import { IndividualloginComponent } from './Registration/individuallogin/individuallogin.component';
import { IndividualuserdetailsComponent } from './Registration/individualuserdetails/individualuserdetails.component';
import { IndividualsignupComponent } from './Registration/individualsignup/individualsignup.component';
import { IndividualselectroleComponent } from './individualselectrole/individualselectrole.component';
import { SidenavindividualmenteeComponent } from './IndividualMenteeDashMenus/sidenavindividualmentee/sidenavindividualmentee.component';
import { IndividualmenteesdashboardComponent } from './individualmenteesdashboard/individualmenteesdashboard.component';
import { IndividualmenteebusinessassociateComponent } from './IndividualMenteeDashMenus/individualmenteebusinessassociate/individualmenteebusinessassociate.component';
import { IndividualmenteecoursesComponent } from './IndividualMenteeDashMenus/individualmenteecourses/individualmenteecourses.component';
import { IndividualmenteesessionsComponent } from './IndividualMenteeDashMenus/individualmenteesessions/individualmenteesessions.component';
import { IndividualmenteeprofileComponent } from './IndividualMenteeDashMenus/individualmenteeprofile/individualmenteeprofile.component';
import { IndividualemailverifyotpComponent } from './Registration/individualemailverifyotp/individualemailverifyotp.component';
import { IndividualforgotmailComponent } from './Registration/individualforgotmail/individualforgotmail.component';
import { IndividualforgototpComponent } from './Registration/individualforgototp/individualforgototp.component';
import { IndividualresetpasswordComponent } from './Registration/individualresetpassword/individualresetpassword.component';

const routes: Routes = [
  { path: '',   redirectTo: '/Landingpage', pathMatch: 'full' },
  {path:'Homepage',component:HomepageComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Footer',component:FooterComponent},
  {path:'companyLogin',component:LoginComponent},
  {path:'companySignup',component:SignupComponent},
  {path:'Landingpage',component:LandingpageComponent},
  {path:'selectrole',component:SelectrolemodalComponent},
  {path:'walkthrough',component:WalkthroughscreenComponent},
  {path:'companyadmindashboard',component:CompanyadmindashboardComponent},
  {path:'companyadminmentor',component:CompanyadminmentorComponent},
  {path:'mentordetails',component:MentordetailsComponent},
  {path:'companyuserdetails',component:UserdetailsComponent},

  {path:'individuallogin',component:IndividualloginComponent},
  {path:'individualuserdetails',component:IndividualuserdetailsComponent},
  {path:'individualsignup',component:IndividualsignupComponent},
  {path:'individualselectrole',component:IndividualselectroleComponent},
  {path:'sidenavindividualmentee',component:SidenavindividualmenteeComponent},
  {path:'individualmenteesdashboard',component:IndividualmenteesdashboardComponent},

  {path:'individualmenteesessions',component:IndividualmenteesessionsComponent},
  {path:'individualmenteeprofile',component:IndividualmenteeprofileComponent},
  {path:'individualmenteecourses',component:IndividualmenteecoursesComponent},
  {path:'individualmenteebusinessassociate',component:IndividualmenteebusinessassociateComponent},

  {path:'individualemailverifyotp/:Id',component:IndividualemailverifyotpComponent},
  {path:'individualforgotmail',component:IndividualforgotmailComponent},
  {path:'individualforgototp/:Id',component:IndividualforgototpComponent},
  {path:'individualresetpassword/:Id',component:IndividualresetpasswordComponent},


  
  {path:'Selectrolemodal',component:SelectrolemodalComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }