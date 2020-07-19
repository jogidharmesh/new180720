import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-app-info',
  templateUrl: './slide-app-info.component.html',
  styleUrls: ['./slide-app-info.component.css']
})
export class SlideAppInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slider1=true;
  slider2=false;
  slider3=false;

  carouselOptions = {
    margin: 0,
    nav: false,
   // navText: ["<< Previous", "Next >>"],
    responsiveClass: true,
    dots:false,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
       nav:false,
        loop: true
      },
      450: {
        items: 1,
       nav:false,
        loop: true
      },
      600: {
        items: 1,
       nav:false,
        loop: true
      },
      1000: {
        items: 1,
       nav:false,
        loop: true
      },
      1500: {
        items: 1,
       nav:false,
        loop: true
      }
    }
  }

  images = [
    {
      text: "Good life Almonds ",
      image: "../../assets/a.jpeg",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds  ",
      image: "../../assets/b.jpg",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/c.jpeg",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/d.jpeg",
      name: "Kalyan Fashion",
    }
  ]

}
