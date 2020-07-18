import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-category',
  templateUrl: './global-category.component.html',
  styleUrls: ['./global-category.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class GlobalCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  images = [
    {
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
    },
    {
      text: "Electronics",
      image: "../../assets/f.jpeg",
      name :"Kalyan Fashion"
    },
    {
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
    },
    {
      text: "Electronice",
      image: "../../assets/f.jpeg",
      name :"Kalyan Fashion"
    }
  ]

  

}
