import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CartDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stores = [  {
    text: "Vegetables",
    image: "../../assets/a.jpeg",
    name :"Kalyan Fashion"
  },
  {
    text: "Grocery",
    image: "../../assets/b.jpg",
    name :"Kalyan Fashion"
  },
  {
    text: "Men clothing ",
    image: "../../assets/c.jpeg",
    name :"Kalyan Fashion"
  }]

  items = [
    {
      text: "Men clothing ",
      image: "../../assets/c.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Footwear ",
      image: "../../assets/d.jpeg",
      
      name :"Kalyan Fashion",
    },
    {
      text: "Hardware ",
      image: "../../assets/e.jpeg",
      name :"Kalyan Fashion"
    }
  ]

}
