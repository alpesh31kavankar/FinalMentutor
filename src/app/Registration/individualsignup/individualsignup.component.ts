import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/app/Class';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualsignup',
  templateUrl: './individualsignup.component.html',
  styleUrls: ['./individualsignup.component.scss']
})
export class IndividualsignupComponent {

  registration: Registration
  Id: any;
  filesToUpload: Array<File>;
  Emailid: any
  selectedFileNames: string[] = [];
  registrationList: any[]
  mainlist: any[]
  mainlist1: any[]
  constructor(private router: Router,
    private http: HttpClient,
    private service: WebService) {
    this.registration = new Registration();
    this.registrationList = []
    this.mainlist = []
    this.mainlist1 = []
  }

  OnSubmit() {

    console.log("this.registration", this.registration);
    console.log("this.registration.Email", this.registration.Email);


    this.service.GetAllRegistration().subscribe((result) => {
      // console.log(result);
      for (let data of result) {
        this.registrationList.push(data);
      }
      this.mainlist = this.registrationList.filter(x => x.Email == this.registration.Email);
      console.log("this.mainlist.length", this.mainlist.length);
      if (this.mainlist.length == 1) {
        alert('This email registered allready');
      }
      else {

        this.Emailid = this.registration.Email
        this.registration.EmailStatus = "InActive"
        this.registration.OTPNo = ""
        this.registration.Status = ""
        this.service.AddRegistration(this.registration).subscribe((result) => {
          if (result > 0) {

            //  const formData = new FormData();
            //  this.Registration.Photo = this.filesToUpload[0].name;
            //  formData.append('uploadedImage',this.filesToUpload[0],this.Registration.Photo);
            //  this.service.SaveUserLoginImage(formData,result).subscribe(data => {

            alert('User Registrated Successfully.');

            this.SendOTPEmail()
            // this.router.navigateByUrl("/Login");
            debugger


            //  this.service.GetRegistrationByEmail(this.Emailid).subscribe((result) => {
            //   this.registration = result;
            //   console.log(this.registration)
            //   console.log(this.registration.RegistrationId)
            //   sendmail(this.registration.RegistrationId, this.registration.Email,this.registration.FName);
            // });



            //  });       
          }
          else {
            alert("Something went wrong! Please try again.")
          }
        });

      }
    })
  }
  // fileChangeEvent(fileInput: any){
  // this.filesToUpload = <Array<File>>fileInput.target.files;
  // this.selectedFileNames = [];
  // for (let i = 0; i < this.filesToUpload.length; i++)
  // {
  //     this.selectedFileNames.push(this.filesToUpload[i].name);
  //     this.Registration.Photo = this.filesToUpload[i].name;
  // } 
  // }

  SendOTPEmail() {
    this.service.SendOTPEmail(this.registration.Email).subscribe({

      next: (response) => {
        alert("Email sent successfully")

        console.log('Email sent successfully:', response);
        //this.router.navigate(['otp']);
        this.registration.OTPNo = response.otp;
        console.log('Received OTP:', this.registration.OTPNo);
        //this.storeotp();
        this.service.GetAllRegistration().subscribe((result) => {
          this.registrationList = result;
          this.mainlist1 = this.registrationList.filter(x => x.Email == this.registration.Email);

          for (let data1 of this.mainlist1) {
            this.Id = data1.RegistrationId;
            // this.sendVerificationEmail(this.demo);
          }
          debugger
          this.service.GetRegistrationById(this.Id).subscribe((result) => {
            this.registration = result;
            console.log("fun", this.registration);

            // Invoke OnSubmit here
            //this.OnUpdate();
            this.registration.OTPNo = response.otp;
            this.service.UpdateRegistration(this.registration).subscribe((result) => {
              if (result == 0) {
                alert('Not updated!');

              } else {
                alert('updated successfully');
                this.router.navigateByUrl("/individualemailverifyotp/" + this.Id);

                //  this.router.navigate(['otp']);
              }
            });
          });
        });
      }
    });
  }


  ngOnInit(): void {
  }

}