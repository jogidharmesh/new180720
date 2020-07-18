import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PaymentMethodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  favoriteSeason: string;
  seasons: string[] = ['online Via UPI ', 'Cash On Delivery', 'Pay Via m-paisa' ];
  change(val){
    let upi =false;
    let mpaisa = false;
    let cash = false;

    if(val=="1"){
      
      upi =true;
      mpaisa =false;
      cash =false;
    }
    else if(val=="2"){
      upi =false;
      mpaisa = true;
      cash =false;
    }
    else if(val=="3"){
      upi = false;
      mpaisa = false;
      cash = true;
    }
    
  }
}
