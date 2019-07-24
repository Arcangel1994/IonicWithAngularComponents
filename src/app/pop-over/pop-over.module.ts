import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopOverPage } from './pop-over.page';
import { ComponentsModule } from '../components/components.module';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';

const routes: Routes = [
  {
    path: '',
    component: PopOverPage
  }
];

@NgModule({
  entryComponents: [
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [PopOverPage]
})
export class PopOverPageModule {}
