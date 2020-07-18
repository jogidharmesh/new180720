import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class StoreLocatorComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  value = 'Search';
  
  
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
        items: 5,
       nav:false,
        loop: true
      }
    }
  }
  

  carouselOptionsStore = {
   nav:false,
   // navText: ["<< Previous", "Next >>"],
    responsiveClass: true,
    dots : false,
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
        items: 5,
       nav:false,
        loop: true
      }
  }
}

  images = [
    {
      text: "Festive Deer",
      image: "../../assets/a.jpeg"
    },
    {
      text: "Festive Deer",
      image: "../../assets/b.jpg"
    },
    {
      text: "Festive Deer",
      image: "../../assets/c.jpeg"
    },
    {
      text: "Festive Deer",
      image: "../../assets/d.jpeg"
    },
    {
      text: "Festive Deer",
      image: "../../assets/e.jpeg"
    },
    {
      text: "Festive Deer",
      image: "../../assets/f.jpeg"
    }
  ]

  stores = [
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
      image: "../../assets/e.jpg",
      name :"Kalyan Fashion"
    }
  ]


  storesCat = [
    {
      text: "Grocery",
      image: "../../assets/a.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Food",
      image: "../../assets/b.jpg",
      name :"Kalyan Fashion"
    },
    {
      text: "Shopping",
      image: "../../assets/c.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "electronics",
      image: "../../assets/d.jpeg",
      name :"Kalyan Fashion",
    },
    {
      text: "Saloon",
      image: "../../assets/e.jpeg",
      name :"Kalyan Fashion"
    },
    {
      text: "Apparel",
      image: "../../assets/e.jpeg",
      name :"Kalyan Fashion"
    },

    {
      text: "Clothes",
      image: "../../assets/a.jpeg",
      name :"Kalyan Fashion"
    }
  
  ]
  
   
}
