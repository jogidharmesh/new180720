import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
    }
    // },
    // {
    //   text: "Good life Almonds ",
    //   image: "../../assets/e.jpeg",
    //   name :"Kalyan Fashion"
    // },
    // {
    //   text: "Good life Almonds ",
    //   image: "../../assets/a.jpeg",
    //   name :"Kalyan Fashion"
    // },
    // {
    //   text: "Good life Almonds  ",
    //   image: "../../assets/b.jpg",
    //   name :"Kalyan Fashion"
    // },
    // {
    //   text: "Good life Almonds ",
    //   image: "../../assets/c.jpeg",
    //   name :"Kalyan Fashion"
    // },
    // {
    //   text: "Good life Almonds ",
    //   image: "../../assets/d.jpeg",
    //   name :"Kalyan Fashion",
    // },
    // {
    //   text: "Good life Almonds ",
    //   image: "../../assets/e.jpeg",
    //   name :"Kalyan Fashion"
    // }
  ]

  str = [{},
    {},
    {}]
}
