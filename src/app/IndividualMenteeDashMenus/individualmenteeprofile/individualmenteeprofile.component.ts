import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MenteeProfile, MenteeSkill, Registration, Skill, UserDetail } from 'src/app/Class';
import { GlobalVariable } from 'src/app/Global';
import { WebService } from 'src/app/Service';

@Component({
  selector: 'app-individualmenteeprofile',
  templateUrl: './individualmenteeprofile.component.html',
  styleUrls: ['./individualmenteeprofile.component.scss']
})
export class IndividualmenteeprofileComponent implements OnInit{
  menteeProfile: MenteeProfile
  UId: any
  SId: any
  registration:Registration;
  menteeSkill:MenteeSkill
  skill:Skill
  skillList:any[]
  userDetail: UserDetail
  userDetailsList:any[]
  userDetailmainList:any[]
  userDetailId:any
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  imgPath: string = GlobalVariable.BASE_API_URL;
  
  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
      this.menteeProfile = new MenteeProfile();
      this.menteeSkill=new MenteeSkill()
      this.userDetail = new UserDetail();

       this.menteeSkill.skill = new Skill();
      this.skillList=[]
      this.userDetailsList=[]
      this.userDetailmainList=[]

    this.route.params.subscribe((params) => {
      debugger
      this.UId = JSON.parse(localStorage.getItem('SID'));
      this.SId = JSON.parse(localStorage.getItem('MenteeId'));
      console.log("UserId", this.UId)
      console.log("SId", this.SId)

      this.service.GetRegistrationById(this.UId).subscribe((result) => {
       
        this.registration = result;
        console.log(this.registration);

      });
      this.service.GetMenteeProfileById(this.SId).subscribe((result) => {

        this.menteeProfile = result;
        console.log(this.menteeProfile);
  });

this.GetAllUserDetail()
  
    })
  }
         // to load modal css and js
         public loadScript() {
          let body = <HTMLDivElement> document.body;
          let script = document.createElement('script');
          script.innerHTML = '';
          script.src = '/assets/js/flickity.pkgd.min.js';
          script.async = true;
          script.defer = true;
          body.appendChild(script);
      }
  

      GetAllUserDetail(){
        this.service.GetAllUserDetail().subscribe((result) => {
          this.userDetailsList=[]
          this.userDetailmainList=[]
          // console.log(result);
          for(let data of result){
              this.userDetailsList.push(data);   
          }
          this.userDetailmainList= this.userDetailsList.filter(x => x.RegistrationId==this.UId);
          console.log("userDetailmainList",this.userDetailmainList);
          if(this.userDetailmainList.length==1){
            // this.router.navigateByUrl("/SelectRole"); 
            for(let data of this.userDetailmainList){
              this.userDetailId=data.UserDetailId
            }
            this.service.GetUserDetailById(this.userDetailId).subscribe((result) => {
      
              this.userDetail = result;
              console.log(this.userDetail);
            });
            
          }
          else{
      alert("error")
          }
        })
      }



      AddNewSkill(){
        this.menteeSkill.MenteeProfileId=this.SId
    console.log("MentorSkill", this.menteeSkill);
    this.service.AddMenteeSkill(this.menteeSkill).subscribe((result) => {
      if (result > 0) {  
          alert('Saved Successfully.');
      
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });
      }


      OnProfileUpdate(){
        this.service.UpdateMenteeProfile(this.menteeProfile).subscribe((result) => {
          console.log("hhh", result);
          if (result == 0) {
            alert("Something went wrong! Please try again.");
          } else {
            alert('Saved Successfully.');
            // this.router.navigateByUrl("/individualmenteedashboard");
          }
        });
      }

      GetAllSkill() {
        this.skillList = []
        this.service.GetAllSkill().subscribe((result) => {
          for (let data of result) {
            this.skillList.push(data);
          }
          console.log("skillList", this.skillList);
        });
      }

    ngOnInit(): void {
      this.loadScript();
      this.GetAllSkill()
      this.getCountry();
      // this.openModal();
  
    }


    OnUpdateUserDetail(){
      console.log(this.userDetail);
      this.service.UpdateUserDetail(this.userDetail).subscribe((result) => {
        console.log("hhh",result);
        if (result == 0) {
          alert("Something went wrong! Please try again.");
        } else {
               alert('Saved Successfully.');            
          const formData = new FormData();
          this.userDetail.Photo = this.filesToUpload[0].name;
          formData.append('uploadedImage',this.filesToUpload[0],this.userDetail.Photo);
          this.service.SaveUserDetailImage(formData,result).subscribe(data => {
           
            this.GetAllUserDetail();
          });    
          // this.GetAllUserDetail()  
       }
     
        
      });
    }
    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
      this.selectedFileNames = [];
      for (let i = 0; i < this.filesToUpload.length; i++)
      {
          this.selectedFileNames.push(this.filesToUpload[i].name);
          this.userDetail.Photo = this.filesToUpload[i].name;
      } 
      }

    
  @ViewChild('countryInput') countryInput: ElementRef<HTMLInputElement>;
  @ViewChild('stateInput') stateInput: ElementRef<HTMLInputElement>;
  @ViewChild('cityInput') cityInput: ElementRef<HTMLInputElement>;
  
  countryControl = new FormControl('');
  stateControl = new FormControl('');
  cityControl = new FormControl('');
  
  countryOptions: any[] = [];
  stateOptions: any[] = [];
  cityOptions: any[] = [];
  
  filteredCountryOptions: any[];
  filteredStateOptions: any[];
  filteredCityOptions: any[];
  
  
  
  updatePlaceholder(inputElement: ElementRef<HTMLInputElement>, filteredOptions: any[]): void {
    const autocompleteTextBox = inputElement.nativeElement;
  
    if (filteredOptions.length === 0) {
      autocompleteTextBox.placeholder = 'Empty';
    } else {
      autocompleteTextBox.placeholder = 'Start typing...';
    }
  }
  
  getCountry() {
    this.countryOptions = [];
    this.http.get('/assets/json/country.json').subscribe((data: any) => {
      this.countryOptions.push(data);
      // this.options = this.countryOptions; // Update the options array with country names
      console.log('countryOptions is ', this.countryOptions);
      // console.log('options is ', this.options);
    });
  }
  
  getState(cntryid) {
    debugger;
    // Similarly, fetch state data and update stateOptions array
    this.stateOptions = [];
    this.cityOptions = [];
    this.http.get('/assets/json/state.json').subscribe((data: any) => {
      this.stateOptions.push(data);
      debugger;
      console.log('stateOptions is ', this.stateOptions);
      this.stateOptions =this.stateOptions[0].filter(s => s.country_id === cntryid);
      console.log('Filtered ststeoption is is ', this.stateOptions);
    });
  }
  
  getCity(steid) {
    this.cityOptions = [];
    // Similarly, fetch state data and update stateOptions array
    this.http.get('/assets/json/city.json').subscribe((data: any) => {
      this.cityOptions.push(data);
      console.log('cityOptions is ', this.cityOptions);
      this.cityOptions =this.cityOptions[0].filter(s => s.state_id === steid);
      console.log('Filtered ststeoption is is ', this.stateOptions);
    });
  }
  
  // Extra
  
  
  filterCountry(ss): void {
    this.stateOptions = [];
  
    const filterValue = this.countryInput.nativeElement.value.toLowerCase();
    this.filteredCountryOptions = this.countryOptions[0].filter(o => o.name.toLowerCase().startsWith(filterValue));
  
    this.updatePlaceholder(this.countryInput, this.filteredCountryOptions);
    debugger;
    // Update stateOptions based on the selected country
    const selectedCountry = this.countryOptions[0].find(c => c.id === ss);
    debugger;
    // this.stateOptions = selectedCountry ? this.stateOptions[0].filter(s => s.country_id === selectedCountry.id) : [];
    console.log("selected country",);
    this.getState(selectedCountry.id);
  }
  
  filterState(cc): void {
    const filterValue = this.stateInput.nativeElement.value.toLowerCase();
    this.filteredStateOptions = this.stateOptions.filter(o => o.name.toLowerCase().startsWith(filterValue));
  
    this.updatePlaceholder(this.stateInput, this.filteredStateOptions);
  
    // Update cityOptions based on the selected state
    const selectedState = this.stateOptions.find(s => s.id === cc);
   
    // this.cityOptions = selectedState ? this.cityOptions[0].filter(c => c.state_id === selectedState.id) : [];
    this.getCity(selectedState.id);
  }
  
  filterCity(): void {
    const filterValue = this.cityInput.nativeElement.value.toLowerCase();
    this.filteredCityOptions = this.cityOptions.filter(o => o.name.toLowerCase().startsWith(filterValue));
  
    this.updatePlaceholder(this.cityInput, this.filteredCityOptions);
  }





}
