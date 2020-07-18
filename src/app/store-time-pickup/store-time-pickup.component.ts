import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-time-pickup',
  templateUrl: './store-time-pickup.component.html',
  styleUrls: ['./store-time-pickup.component.css']
})
export class StoreTimePickupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  timing = [

    { 'time': "8 AM to 9 AM"},
    { 'time': "9 AM to 9 AM"},
    { 'time': "10 AM to 9 AM"},
    { 'time': "11 AM to 9 AM"},
    { 'time': "12 AM to 9 AM"},
    { 'time': "1 PM to 9 AM"},
    { 'time': "2 AM to 9 AM"},
    { 'time': "3 AM to 9 AM"},
    { 'time': "4 AM to 9 AM"},
    { 'time': "5 AM to 9 AM"},
    { 'time': "6 AM to 9 AM"},
    { 'time': "7 AM to 9 AM"},
    { 'time': "8 AM to 9 AM"},

  ]

  items = [,
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}]
}
