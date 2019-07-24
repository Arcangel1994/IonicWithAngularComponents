import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';
import { ComponentsModule } from '../components/components.module';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  entryComponents: [
    ModalInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ModalInfoPageModule
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
