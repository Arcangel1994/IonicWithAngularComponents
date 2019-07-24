import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( event ) => {
          console.log('Clicked Save!');
          console.log(`${event.day.value} ${event.month.value} ${event.year.value}`);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  cambioFecha(event) {
    console.log('IonChange ', event);
    console.log('Date  ', new Date(event.detail.value));
  }

}
