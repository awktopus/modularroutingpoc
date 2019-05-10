import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Mod1RoutingModule } from './mod1-routing.module'

import { IonicModule } from '@ionic/angular';

import { Mod1Page } from './mod1.page';

const routes: Routes = [
  {
    path: '',
    component: Mod1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Mod1RoutingModule
  ],
  declarations: [Mod1Page]
})
export class Mod1PageModule {}
