import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  item = ['Luis', 'Mario', 'Erika', 'Gabriel', 'Luz', 'Pedro', 'Karla', 'Gaby'];

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(i) {
    console.log('Item ', i);
    this.popoverCtrl.dismiss({item: i});
  }

}
