
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/app/Class';
import { HeaderComponent } from 'src/app/HeadFoot/header/header.component';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individuallogin',
  templateUrl: './individuallogin.component.html',
  styleUrls: ['./individuallogin.component.scss']
})
export class IndividualloginComponent {
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;

  registration: Registration
  user: any
  loggedIn: any
  registrationList: any[]
  mainlist: any[]
  newId: any
  newES: any
  userid: any
  rid: any
  password;
  searchText1: any
  searchText2: any
  show = false;
  constructor(private authService: SocialAuthService, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.registration = new Registration();
    this.registrationList = []
    this.newId = 0
    this.userid = 0
    this.rid = 0
    this.newES = ""
    this.mainlist = []
    this.password = 'password';
  }

  OnSubmit() {

    //newly added these two line
    this.mainlist = []
    this.registrationList = []

    console.log("registration", this.registration);

    this.service.GetAllRegistration().subscribe((result) => {
      // console.log(result);
      for (let data of result) {
        this.registrationList.push(data);
      }
      this.mainlist = this.registrationList.filter(x => x.Email == this.searchText1);
      console.log("this.mainlist.length on s", this.mainlist.length);
      if (this.mainlist.length == 1) {
        this.service.GetRegistrationByEmail(this.searchText1).subscribe((result) => {
          this.registration = result;
          console.log("this.registration", this.registration)
          console.log("this.registration.EmailStatus", this.registration.EmailStatus)
          this.newES = this.registration.EmailStatus
          this.rid = this.registration.RegistrationId
          console.log("this.newES", this.newES)

          if (this.newES == "Active") {
            this.service.Login(this.searchText1, this.searchText2).subscribe((result) => {
              localStorage.setItem('SID', result.RegistrationId);
              this.userid = JSON.parse(localStorage.getItem('SID'));

              console.log("userid", this.userid);
              if (this.userid == 0) {
                alert("Invalid Email and Password.")
              }
              else {
                alert("User Login on s Successfully");
                this.router.navigateByUrl("/individualuserdetails");
                // this.router.navigateByUrl("/SelectRole");  
                // 
              }
            })
          }
          else {
            alert(" Please Activate mail First.")
            this.router.navigateByUrl("/individualemailverifyotp/" + this.rid);
          }
        })
      }
      else {
        alert("please signup first")
      }
    })



    // this.service.Login(this.Registration.Email,this.Registration.Password).subscribe((result) => {
    //   localStorage.setItem('SID', result.Id);
    //   this.userid=JSON.parse(localStorage.getItem('SID'));

    //  console.log("userid",this.userid);
    //   if (this.userid== 0) {
    //     alert("Something went wrong! Please try again.")
    //   }
    //   else{
    //     alert("User Login Successfully");
    //     this.router.navigateByUrl("/SelectRole");  
    //   }
    // })
    //  this.service.AddUserLogin(this.Registration).subscribe((result) => {
    //    if (result > 0) {


    //        alert('Saved Successfully.');

    //    }
    //    else {
    //      alert("Something went wrong! Please try again.")
    //    }
    //  });

  }
  onClick() {

    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  OnCreate() {
    this.router.navigateByUrl("/individualsignup");
  }


  ngOnInit() {



    this.password = 'password';
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("this.user", this.user)
      debugger
      // GetAll code
      this.service.GetAllRegistration().subscribe((result) => {
        // console.log(result);
        for (let data of result) {
          this.registrationList.push(data);
        }
        console.log("RegistrationList in g", this.registrationList);
        this.mainlist = this.registrationList.filter(x => x.Email == this.user.email);
        console.log("this.mainlist in g", this.mainlist);
        console.log("this.mainlist.length in g", this.mainlist.length);


        if (this.mainlist.length == 0) {

          this.registration.FName = this.user.firstName
          this.registration.LName = this.user.lastName

          this.registration.Email = this.user.email
          this.registration.OTPNo = ""
          this.registration.Password = ""
          this.registration.EmailStatus = "Active"
          this.registration.Status = "Active"
          this.service.AddRegistration(this.registration).subscribe((result) => {
            if (result > 0) {
              alert('Add user in g Successfully.');


              // getid through email
              this.service.GetRegistrationByEmail(this.user.email).subscribe((result) => {
                this.registration = result;
                console.log("Registration", this.registration)
                this.newId = this.registration.RegistrationId
                console.log("newId", this.newId)
                localStorage.setItem('SID', this.newId);
                this.userid = JSON.parse(localStorage.getItem('SID'));
                if (this.userid == 0) {
                  alert("Something went wrong! Please try again.");
                }
                else {
                  // alert("User Login Successfully");
                  this.router.navigateByUrl("/individualuserdetails");
                }
              });


              // this.router.navigateByUrl('/UserDetails');            
            }
            else {
              alert("Something went wrong! Please try again.")
            }
          });



        } else {

          // getid through email
          this.service.GetRegistrationByEmail(this.user.email).subscribe((result) => {
            this.registration = result;
            console.log(this.registration)
            this.newId = this.registration.RegistrationId
            console.log("newId", this.newId)
            localStorage.setItem('SID', this.newId);
            this.userid = JSON.parse(localStorage.getItem('SID'));
            if (this.userid == 0) {
              alert("Something went wrong! Please try again.");
            }
            else {
              alert("User Login alredy exist email Successfully");
              this.router.navigateByUrl("/individualuserdetails");
            }
          });


        }
        console.log(this.registrationList);

      });




      // this.Registration.Name=this.user.name
      // this.Registration.Email=this.user.email
      // this.Registration.Photo=this.user.photoUrl
      // this.Registration.Address=""
      // this.Registration.BirthDate=""
      // this.Registration.Mobile=""
      // this.Registration.Password=""
      // this.Registration.EmailStatus="Active"
      //       this.service.AddUserLogin(this.Registration).subscribe((result) => {
      //            if (result > 0) {

      //             this.router.navigateByUrl('/Home');
      //                alert('Saved Successfully.');

      //            }
      //            else {
      //              alert("Something went wrong! Please try again.")
      //            }
      //          });


    });
  }






}