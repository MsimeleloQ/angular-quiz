import { Component, OnInit } from '@angular/core';
import { ContactDetails } from '../Models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contact: ContactDetails = new ContactDetails(); 
    

  contactMe(){
    alert('Thanks for Contacting us we will get back to you very soon');
    console.log(this.contact);
    this.resetAll();
  }

  resetAll() {
    this.contact = new ContactDetails();
    
  }

}
