import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-store-component',
  templateUrl: './list-store-component.component.html',
  styleUrls: ['./list-store-component.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ListStoreComponentComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  

  images = [
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi",
      image: "../../assets/a.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi ",
      image: "../../assets/b.jpg",
      name :"Kalyan Fashion"
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi",
      image: "../../assets/c.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi",
      image: "../../assets/d.jpeg",
      name :"Kalyan Fashion",
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi",
      image: "../../assets/e.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi",
      image: "../../assets/e.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi",
      image: "../../assets/a.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi ",
      image: "../../assets/b.jpg",
      name :"Kalyan Fashion"
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi",
      image: "../../assets/c.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi",
      image: "../../assets/d.jpeg",
      name :"Kalyan Fashion",
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi",
      image: "../../assets/e.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Shop No 23,Behind Man Darwadja,Mg Road,New Delhi",
      image: "../../assets/e.jpeg",
      name :"Kalyan Fashion"
    }
  ]
   

}
