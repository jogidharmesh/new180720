import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryAddressComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
    
  }
  
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
      address: new FormControl(''),
      mobile: new FormControl(''),
      fullname:new FormControl('')
      
      
    })
  });
  
  dstatus = 'show';
  show = false;

  showhide(){
   if(this.show == false){
    this.dstatus = "back";
    this.show = true;
   }
   else{
    this.dstatus = "Show";
    this.show = false;
   }
  }

     ad = false;
     noadd = true;
     pickupfromstore  =false;
     hd = false;
     ps = false;
   
  }
  