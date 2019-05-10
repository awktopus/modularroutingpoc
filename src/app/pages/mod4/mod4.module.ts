import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Mod4Page } from './mod4.page';
import { Mod4RoutingModule } from './mod4-routing.module'

const routes: Routes = [
  {
    path: '',
    component: Mod4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Mod4RoutingModule
  ],
  declarations: [Mod4Page]
})
export class Mod4PageModule {}
