import { Component } from '@angular/core';
import { SelectrolemodalComponent } from '../../selectrolemodal/selectrolemodal.component';
import { WalkthroughscreenComponent } from '../../walkthroughscreen/walkthroughscreen.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

// 

import { ElementRef, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {
  modalRef: MdbModalRef<SelectrolemodalComponent> | null = null;
  modalRefWalk: MdbModalRef<WalkthroughscreenComponent> | null = null;
  constructor(private modalService: MdbModalService) {
    this.filteredOptions = this.options.slice();
  }

  openModal() {
    this.modalRef = this.modalService.open(SelectrolemodalComponent)
  }

  openModalWalk() {
    
    this.modalRefWalk = this.modalService.open(WalkthroughscreenComponent , {
      
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
        this.openModalWalk();
    
      }

      @ViewChild('input') input: ElementRef<HTMLInputElement>;
      myControl = new FormControl('');
      options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
      filteredOptions: string[];
    
      
    
      filter(): void {
        const filterValue = this.input.nativeElement.value.toLowerCase();
        this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
       
        const autocompleteTextBox = this.input.nativeElement;

        if (this.filteredOptions.length === 0) {
            // Set the value of the autocomplete text box to an empty string
            autocompleteTextBox.value = '';
            // Display "Empty" placeholder or any desired text
            autocompleteTextBox.placeholder = 'Empty';
        } else {
            // Set the value of the autocomplete text box to the first option in filteredOptions
            // autocompleteTextBox.value = this.filteredOptions[0];
            // Clear the placeholder or set it to default
            autocompleteTextBox.placeholder = 'Start typing...';
        }
// else {
//   alert('Size of filtered options: ' + this.filteredOptions.length);
// }
      }
}
