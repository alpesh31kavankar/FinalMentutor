import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration } from 'src/app/Class';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualresetpassword',
  templateUrl: './individualresetpassword.component.html',
  styleUrls: ['./individualresetpassword.component.scss']
})
export class IndividualresetpasswordComponent {
  registration: Registration;

  mainList: any;
  demo: any;
  Id: any;
  confirmPassword: any
  newPassword:any


  constructor(private router: Router, private http: HttpClient,
    private service: WebService, private route: ActivatedRoute,) {

    this.registration = new Registration();

    this.mainList = [];
    this.demo = 0;
    // this.confirmPassword = ""

    this.route.params.subscribe((params) => {
      debugger
      this.Id = params['Id'];
      console.log("addclient", this.Id)

      this.service.GetRegistrationById(this.Id).subscribe((result) => {

        this.registration = result;
        console.log("this.registration", this.registration);

      });

    });

  }

  OnSubmit() {
    console.log(this.newPassword, "this.newPassword")
    console.log(this.confirmPassword, "this.confirmPassword")
    if (this.newPassword == this.confirmPassword) {
      console.log("final", this.registration)
      this.registration.Password=this.newPassword
      this.service.UpdateRegistration(this.registration).subscribe((result) => {
        console.log("hhh", result);
        if (result == 0) {
          alert("Something went wrong! Please try again.");
        } else {
          alert('Saved Successfully.');
          this.router.navigate(['/individuallogin']);
        }
      });
    } else {
      alert("password not match")
    }

  }

}
