import { Component, OnInit } from '@angular/core';
import { SlideAppInfoComponent } from '../slide-app-info/slide-app-info.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navigation-cmp',
  templateUrl: './navigation-cmp.component.html',
  styleUrls: ['./navigation-cmp.component.css']
})
export class NavigationCmpComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    // const dialogRef = this.dialog.open(ModalContentComponent);

    const dialogRef = this.dialog
    .open(SlideAppInfoComponent, {
      width: '600px',
      height: '400px'
      // data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

}
}
