import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-individualmenteeprofile',
  templateUrl: './individualmenteeprofile.component.html',
  styleUrls: ['./individualmenteeprofile.component.scss']
})
export class IndividualmenteeprofileComponent implements OnInit{
  constructor() {}
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
  
      // this.openModal();
  
    }
}
