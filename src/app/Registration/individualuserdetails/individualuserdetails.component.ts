import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IndividualselectroleComponent } from '../../individualselectrole/individualselectrole.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { UserDetail } from 'src/app/Class';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'src/app/Service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-individualuserdetails',
  templateUrl: './individualuserdetails.component.html',
  styleUrls: ['./individualuserdetails.component.scss']
})
export class IndividualuserdetailsComponent implements OnInit{

  //  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  // myControl = new FormControl();
  // options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  // filteredOptions: string[];


  modalRef: MdbModalRef<IndividualselectroleComponent> | null = null;

  UId:any
  userDetail: UserDetail

  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  userDetailsList:any[]
  userDetailmainList:any[]

  
  constructor(private modalService: MdbModalService,private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebService) {

      //  this.filteredOptions = this.options.slice();

      this.userDetail = new UserDetail();
    
    
    this.userDetailsList=[]
    this.userDetailmainList=[]
        this.route.params.subscribe((params) => {
          debugger
                this.UId = JSON.parse(localStorage.getItem('SID'));
                console.log("UserId",this.UId)
              });
    
              this.service.GetAllUserDetail().subscribe((result) => {
                // console.log(result);
                for(let data of result){
                    this.userDetailsList.push(data);   
                }
                console.log("userDetailsList",this.userDetailsList);
                this.userDetailmainList= this.userDetailsList.filter(x => x.RegistrationId==this.UId);
                console.log("userDetailmainList",this.userDetailmainList);
                if(this.userDetailmainList.length==1){
                  // this.router.navigateByUrl("/SelectRole"); 
                   this.openModal()
                }
                else{
          
                }
          
              })
  }




      // trackOption(index: number, option: string): string {
      //   return option;
      // }
      // filter(): void {
      //   const filterValue = this.input.nativeElement.value.toLowerCase();
      //   this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
      // }

  OnSubmit() {
    this.userDetail.RegistrationId=this.UId
    // this.userDetail.CountryId=1
  
    this.userDetail.Status="Active"

    console.log("userDetail",this.userDetail);
   this.service.AddUserDetail(this.userDetail).subscribe((result) => {
     if (result > 0) {
      const formData = new FormData();
      this.userDetail.Photo = this.filesToUpload[0].name;
      formData.append('uploadedImage',this.filesToUpload[0],this.userDetail.Photo);
      this.service.SaveUserDetailImage(formData,result).subscribe(data => {
       
        alert('Saved Successfully.');
       // this.openModal()
      });  
     }
     else {
       alert("Something went wrong! Please try again.")
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

  openModal() {
    this.modalRef = this.modalService.open(IndividualselectroleComponent)
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


  ngOnInit(): void {

    this.getCountry();

      }


}