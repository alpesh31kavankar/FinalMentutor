import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class IndividualuserdetailsComponent {

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
   countries:any[]
  
  constructor(private modalService: MdbModalService,private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: WebService) {

      //  this.filteredOptions = this.options.slice();

      this.userDetail = new UserDetail();
    this.countries=[]
    this.getcountryData();
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

  getcountryData(){
  
    this.http.get('assets/json/country.json').subscribe((data) => {
      
    this.countries.push(data);
    console.log("Allcountrylist is ",this.countries)
    
    });
   
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
    this.userDetail.CountryId=1
    this.userDetail.StateId=1
    this.userDetail.CityId=1
    this.userDetail.Status="Active"

    console.log("userDetail",this.userDetail);
   this.service.AddUserDetail(this.userDetail).subscribe((result) => {
     if (result > 0) {
      const formData = new FormData();
      this.userDetail.Photo = this.filesToUpload[0].name;
      formData.append('uploadedImage',this.filesToUpload[0],this.userDetail.Photo);
      this.service.SaveUserDetailImage(formData,result).subscribe(data => {
       
        alert('Saved Successfully.');
        this.openModal()
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
}
