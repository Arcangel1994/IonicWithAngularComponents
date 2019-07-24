import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();

  }

  favorite(usuario) {
    console.log('Favorite', usuario);
    this.presentToast(`User: ${usuario.name} is Favorite`, 'primary');
    this.lista.closeSlidingItems();
  }

  share(usuario) {
    console.log('Share', usuario);
    this.presentToast(`${usuario.name} is Share`, 'secondary');
    this.lista.closeSlidingItems();
  }

  delete(usuario) {
    console.log('Delete', usuario);
    this.presentToast(`User: ${usuario.name} has been Deleted`, 'danger');
    this.lista.closeSlidingItems();
  }

  async presentToast(message: string, color) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

}
