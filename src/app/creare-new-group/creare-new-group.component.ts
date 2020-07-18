import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creare-new-group',
  templateUrl: './creare-new-group.component.html',
  styleUrls: ['./creare-new-group.component.css']
})
export class CreareNewGroupComponent implements OnInit {

  constructor() { }
  show:boolean = true
  ngOnInit() {
  }

  nextClick(){
   
     this.show == true ? this.show =false :this.show =true;
  }


  images = [
    {
      text: "Ajay Bhrdvaj ",
      image: "../../assets/user.png",
      name: "Kalyan Fashion"
    },
    {
      text: "Ajay Bhrdvaj  ",
      image: "../../assets/user.png",
      name: "Kalyan Fashion"
    },
    {
      text: "Ajay Bhrdvaj ",
      image: "../../assets/user.png",
      name: "Kalyan Fashion"
    },
    {
      text: "Ajay Bhrdvaj ",
      image: "../../assets/user.png",
      name: "Kalyan Fashion",
    },
    {
      text: "Ajay Bhrdvaj ",
      image: "../../assets/user.png",
      name: "Kalyan Fashion"
    },
    {
      text: "Ajay Bhrdvaj ",
      image: "../../assets/user.png",
      name: "Kalyan Fashion"
    },
    {
      text: "Ajay Bhrdvaj  ",
      image: "../../assets/user.png",
      name: "Kalyan Fashion"
    },
    {
      text: "Ajay Bhrdvaj ",
      image: "../../assets/user.png",
      name: "Kalyan Fashion"
    },
    {
      text: "Ajay Bhrdvaj ",
      image: "../../assets/user.png",
      name: "Kalyan Fashion",
    },
    {
      text: "Ajay Bhrdvaj ",
      image: "../../assets/user.png",
      name: "Kalyan Fashion"
    }
  ]
}
