
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration } from 'src/app/Class';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualforgototp',
  templateUrl: './individualforgototp.component.html',
  styleUrls: ['./individualforgototp.component.scss']
})
export class IndividualforgototpComponent {


  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  @ViewChild('input3') input3!: ElementRef;
  @ViewChild('input4') input4!: ElementRef;
  @ViewChild('input5') input5!: ElementRef;
  @ViewChild('input6') input6!: ElementRef;

  Id: any;
   registration: Registration;
   Registrationlist: any[];
   showPassword: boolean;
   mainList: any[];
   searchText: any;
   otp1: any;
   otp2: any;
   otp3: any;
   otp4: any;
   otp5: any;
   otp6: any;

   constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute,
    private service: WebService) {
    this.registration = new Registration();
    this.Registrationlist = [];
    this.mainList=[]
   // this.Id =0

    this.route.params.subscribe((params) => {
      debugger
      
       this.Id = params['Id'];
     //  this.Id = JSON.parse(localStorage.getItem('SID'));
      console.log(" this.Id",this.Id)
    });
            
  }
  moveToNext(currentInput: any, nextInput: any): void {
    if (currentInput.value.length === 1) {
      nextInput.focus();
    }
  }
  OnSubmit1(){
    debugger
  // this.Registration.OTPNo = this.otp;
  // this.generateOTP();
  this.Registrationlist=[]
  this.mainList=[]
   
  this.service.GetRegistrationById(this.Id).subscribe((result) => {
      
   this.registration = result;
   if(this.registration.OTPNo==this.otp1+this.otp2+this.otp3+this.otp4+this.otp5+this.otp6){
     alert("otp Matched")
     this.router.navigateByUrl("/individualresetpassword/" + this.Id);

    //  this.registration.EmailStatus = "Active";
    //  this.service.UpdateRegistration(this.registration).subscribe((result) => {
    //    if (result == 0) {
    //      alert('Not updated!');

    //    } else {
    //     alert("Email activate Succesfully")
        
    //      this.router.navigateByUrl("/ResetPassword/" + this.Id);

    //    }
    //  });


     
    //  this.router.navigateByUrl("/ResetPassword/" + this.Id);
   }else{
     alert("otp not Matched")
   }
  

 });

}

}