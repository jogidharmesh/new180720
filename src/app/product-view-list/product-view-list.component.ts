import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-view-list',
  templateUrl: './product-view-list.component.html',
  styleUrls: ['./product-view-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductViewListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  carouselOptions = {
    margin: 15,
    nav: false,
   // navText: ["<< Previous", "Next >>"],
    responsiveClass: true,
    dots:false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
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

  carouselOptionsRecommed = {
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
        items: 2,
       nav:false,
        loop: true
      },
      600: {
        items: 4,
       nav:false,
        loop: true
      },
      1000: {
        items: 5,
       nav:false,
        loop: true
      },
      1500: {
        items: 6,
       nav:false,
        loop: true
      }
    }
  }
  images = [
    {
      text: "Good life Almonds ",
      image: "../../assets/a.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds  ",
      image: "../../assets/b.jpg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/c.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/d.jpeg",
      name :"Kalyan Fashion",
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/e.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/a.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds  ",
      image: "../../assets/b.jpg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/c.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/d.jpeg",
      name :"Kalyan Fashion",
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/e.jpeg",
      name :"Kalyan Fashion"
    }
  ]

 bimages = [
    {
      text: "Good life Almonds ",
      image: "../../assets/banner.jpg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds  ",
      image: "../../assets/banner-1.jpg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/banner-3.jpg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/banner-4.jpg",
      name :"Kalyan Fashion",
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/banner-3.jpg",
      name :"Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "../../assets/banner-4.jpg",
      name :"Kalyan Fashion"
    }
  ]
   

}
