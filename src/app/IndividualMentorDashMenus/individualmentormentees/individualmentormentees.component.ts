
import { Component, OnInit } from '@angular/core';
// import { SidenavcompanyadminComponent } from '../sidenavcompanyadmin/sidenavcompanyadmin.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
declare const $:any;
import { IndividualsearchmentorComponent } from '../../IndividualMenteeDashMenus/individualsearchmentor/individualsearchmentor.component';
import { MentordetailsComponent } from '../../CompanyAdminDashMenus/mentordetails/mentordetails.component';
@Component({
  selector: 'app-individualmentormentees',
  templateUrl: './individualmentormentees.component.html',
  styleUrls: ['./individualmentormentees.component.scss']
})
export class IndividualmentormenteesComponent  implements OnInit{
  modalRef: MdbModalRef<MentordetailsComponent> | null = null;
  modalRefWalkk: MdbModalRef<IndividualsearchmentorComponent> | null = null;
 
  constructor(private modalService: MdbModalService) {}

  openMentor() {
    this.modalRef = this.modalService.open(MentordetailsComponent, {
      modalClass: 'modal-xl'
    })
  }

  openModalSearchMentor() {
    
    this.modalRefWalkk = this.modalService.open(IndividualsearchmentorComponent , {
      
    modalClass: 'modal-xl'
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

  ngOnInit(): void {
    this.loadScript();
// this.Chartshow();
    // this.openModal();

  }


  // Chartshow(){
  //   var myChart = new Chart("myChart", {
  //     type: 'bar',
  //     data: {
  //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             y: {
  //                 beginAtZero: true
  //             }
  //         }
  //     }
  // });
  // }


  aaa(){
    
  }
}

