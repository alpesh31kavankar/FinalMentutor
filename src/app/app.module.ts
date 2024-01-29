import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule, MdbInputDirective } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './HeadFoot/header/header.component';
import { FooterComponent } from './HeadFoot/footer/footer.component';
import { LoginComponent } from './Registration/login/login.component';
import { SignupComponent } from './Registration/signup/signup.component';
import { LandingpageComponent } from './Starting/landingpage/landingpage.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { SelectrolemodalComponent } from './selectrolemodal/selectrolemodal.component';
import { WalkthroughscreenComponent } from './walkthroughscreen/walkthroughscreen.component';
import { CompanyadmindashboardComponent } from './companyadmindashboard/companyadmindashboard.component';
import { SidenavcompanyadminComponent } from './sidenavcompanyadmin/sidenavcompanyadmin.component';
import Chart from 'chart.js/auto';
import { CompanyadminmentorComponent } from './CompanyAdminDashMenus/companyadminmentor/companyadminmentor.component';
import { MentordetailsComponent } from './CompanyAdminDashMenus/mentordetails/mentordetails.component';
import { UserdetailsComponent } from './Registration/userdetails/userdetails.component';

// material
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IndividualloginComponent } from './Registration/individuallogin/individuallogin.component';
import { IndividualsignupComponent } from './Registration/individualsignup/individualsignup.component';
import { IndividualuserdetailsComponent } from './Registration/individualuserdetails/individualuserdetails.component';
import { IndividualselectroleComponent } from './individualselectrole/individualselectrole.component';
import { IndividualmenteesdashboardComponent } from './individualmenteesdashboard/individualmenteesdashboard.component';
import { SidenavindividualmenteeComponent } from './IndividualMenteeDashMenus/sidenavindividualmentee/sidenavindividualmentee.component';
import { IndividualmenteeprofileComponent } from './IndividualMenteeDashMenus/individualmenteeprofile/individualmenteeprofile.component';
import { IndividualmenteecoursesComponent } from './IndividualMenteeDashMenus/individualmenteecourses/individualmenteecourses.component';
import { IndividualmenteesessionsComponent } from './IndividualMenteeDashMenus/individualmenteesessions/individualmenteesessions.component';
import { IndividualmenteebusinessassociateComponent } from './IndividualMenteeDashMenus/individualmenteebusinessassociate/individualmenteebusinessassociate.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IndividualforgototpComponent } from './Registration/individualforgototp/individualforgototp.component';
import { IndividualresetpasswordComponent } from './Registration/individualresetpassword/individualresetpassword.component';
import { IndividualforgotmailComponent } from './Registration/individualforgotmail/individualforgotmail.component';
import { IndividualemailverifyotpComponent } from './Registration/individualemailverifyotp/individualemailverifyotp.component';


import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';


import { IndividualsearchcourseComponent } from './individualsearchcourse/individualsearchcourse.component';
import { IndividualmenteementorComponent } from './IndividualMenteeDashMenus/individualmenteementor/individualmenteementor.component';
import { IndividualmentordashboardComponent } from './individualmentordashboard/individualmentordashboard.component';
import { SidenavindividualmentorComponent } from './IndividualMentorDashMenus/sidenavindividualmentor/sidenavindividualmentor.component';
import { IndividualmentorprofileComponent } from './IndividualMentorDashMenus/individualmentorprofile/individualmentorprofile.component';
import { IndividualmentorcourseComponent } from './IndividualMentorDashMenus/individualmentorcourse/individualmentorcourse.component';
import { IndividualmentorsessionsComponent } from './IndividualMentorDashMenus/individualmentorsessions/individualmentorsessions.component';
import { IndividualmentormenteesComponent } from './IndividualMentorDashMenus/individualmentormentees/individualmentormentees.component';
import { IndividualmentorcontentComponent } from './IndividualMentorDashMenus/individualmentorcontent/individualmentorcontent.component';
import { IndividualsearchmentorComponent } from './IndividualMenteeDashMenus/individualsearchmentor/individualsearchmentor.component';
import { IndividualmentoraddcoursesComponent } from './IndividualMentorDashMenus/individualmentoraddcourses/individualmentoraddcourses.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    LandingpageComponent,
    HomepageComponent,
    SelectrolemodalComponent,
    WalkthroughscreenComponent,
    CompanyadmindashboardComponent,
    SidenavcompanyadminComponent,
    CompanyadminmentorComponent,
    MentordetailsComponent,
    UserdetailsComponent,
    IndividualloginComponent,
    IndividualsignupComponent,
    IndividualuserdetailsComponent,
    IndividualselectroleComponent,
    IndividualmenteesdashboardComponent,
    SidenavindividualmenteeComponent,
    IndividualmenteeprofileComponent,
    IndividualmenteecoursesComponent,
    IndividualmenteesessionsComponent,
    IndividualmenteebusinessassociateComponent,
    IndividualforgototpComponent,
    IndividualresetpasswordComponent,
    IndividualforgotmailComponent,
    IndividualemailverifyotpComponent,
    IndividualsearchcourseComponent,
    IndividualmenteementorComponent,
    IndividualmentordashboardComponent,
    SidenavindividualmentorComponent,
    IndividualmentorprofileComponent,
    IndividualmentorcourseComponent,
    IndividualmentorsessionsComponent,
    IndividualmentormenteesComponent,
    IndividualmentorcontentComponent,
    IndividualsearchmentorComponent,
    IndividualmentoraddcoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,

    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    // InputsModule.forRoot()
    
// material

MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatRadioModule,

 SocialLoginModule,

MatDatepickerModule,




  ],
  providers: [

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
             // '496925693986-i3markpgj2kk2f6n3rb6k6eviimv6g55.apps.googleusercontent.com'
              // 496925693986-i3markpgj2kk2f6n3rb6k6eviimv6g55.apps.googleusercontent.com
              '256869107176-efrnlcvp8v5q273kq8e3o9is8f59oje0.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
