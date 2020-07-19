import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-view-all',
  templateUrl: './product-view-all.component.html',
  styleUrls: ['./product-view-all.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductViewAllComponent implements OnInit {

  constructor() { }
  
     Value = 'List-View';
     
     dynamically: string = 'new-card';
     dynamicallyBox:string = 'new-card-box';
     imgclass:string = 'image-scale';
     imgclassbox:string = 'img-card';
     fnticon:string = 'fas fa-list-alt';
     wishlist ='fas fa-heart';
     itemadded = 'button';
  
    changeClass(val) {
  
      if (val == 'List-View') {
        this.Value = 'Tile-View'
        this.dynamically = 'new-card-mobile';
        this.dynamicallyBox ='new-card-box-mobile';
        this.imgclass = 'image-scale-mobile';
        this.imgclassbox = 'img-card-mobile';
        this.fnticon = 'fas fa-th-large';
      }
      else {
        this.Value = 'List-View';
        this.dynamically = 'new-card';
        this.dynamicallyBox ='new-card-box';
        this.imgclass = 'image-scale';
        this.imgclassbox = 'img-card';
        this.fnticon = 'fas fa-list-alt'

      }
    }

  ngOnInit() { 

  } 

  wishclick(){

    this.wishlist = 'fas fa-heart red'
  }

  itemadd(){
    this.itemadded = 'button-add';
  }

  images = [
    {
      text: "Good life Almonds ",
      image: "/assets/a.jpeg?raw=true",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds  ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/b.jpg",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/c.jpeg?raw=true",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/d.jpeg?raw=true",
      name: "Kalyan Fashion",
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/e.jpeg?raw=true",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/a.jpeg?raw=true",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds  ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/b.jpg",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/c.jpeg?raw=true",
      name: "Kalyan Fashion"
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/d.jpeg?raw=true",
      name: "Kalyan Fashion",
    },
    {
      text: "Good life Almonds ",
      image: "https://github.com/jogidharmesh/new180720/tree/master/src/assets/e.jpeg?raw=true",
      name: "Kalyan Fashion"
    }
  ]
}
