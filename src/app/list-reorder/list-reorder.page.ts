import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  Heroes = ['Superman', 'Batman', 'Wonder Woman', 'Green Lantern', 'The Flash', 'Aquaman', 'Shazam', 'Arrow'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    /*console.log(event);*/
    const itemMover = this.Heroes.splice(event.detail.from, 1)[0];
    this.Heroes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }

  onClick() {
    console.log(this.Heroes);
  }

}
