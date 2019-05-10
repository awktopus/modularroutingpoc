import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Mod2Page } from './mod2.page';
import { Mod2RoutingModule } from './mod2-routing.module'

const routes: Routes = [
  {
    path: '',
    component: Mod2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Mod2RoutingModule 
  ],
  declarations: [Mod2Page]
})
export class Mod2PageModule {}
