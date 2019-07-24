import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(event) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    /*const {data} = await popover.onWillDismiss(); antes de cerrarce*/
    const {data} = await popover.onDidDismiss();

    console.log('Padre ', data);

  }

}
