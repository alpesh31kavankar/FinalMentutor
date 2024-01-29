import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MenteeProfile, MentorProfile } from '../Class';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../Service';
@Component({
  selector: 'app-selectrolemodal',
  templateUrl: './selectrolemodal.component.html',
  styleUrls: ['./selectrolemodal.component.scss']
})
export class SelectrolemodalComponent {
  
  
  constructor(public modalRef: MdbModalRef<SelectrolemodalComponent>,private route: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private service: WebService) {
    
    }



}
