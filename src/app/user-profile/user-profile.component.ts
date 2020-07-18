import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  encapsulation :ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
