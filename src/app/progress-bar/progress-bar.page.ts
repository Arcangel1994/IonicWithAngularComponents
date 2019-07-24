import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje = 0;

  constructor() { }

  ngOnInit() {
  }

  cambioRango(event) {
    console.log(event);
    this.porcentaje = event.detail.value / 100;
  }

}
