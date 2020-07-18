import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ReviewRatingComponent } from '../review-rating/review-rating.component';
   

@Component({
  selector: 'app-order-cancel',
  templateUrl: './order-cancel.component.html',
  styleUrls: ['./order-cancel.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class OrderCancelComponent  {

  constructor(public dialog: MatDialog) {

   }

  ngOnInit() {
  }

  items = [
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
    }
  ]

  openDialog() {
    // const dialogRef = this.dialog.open(ModalContentComponent);

    const dialogRef = this.dialog.open(ModalContentComponent, {
      width: '250px',
      height: '250px'
      // data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openReview() {
    // const dialogRef = this.dialog.open(ModalContentComponent);

    const dialogRef = this.dialog.open(ReviewRatingComponent, {
      width: '400px',
      height: '400px'
      // data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
