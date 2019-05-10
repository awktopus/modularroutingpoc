import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Mod3Page } from './mod3.page';
import { Mod3RoutingModule } from './mod3-routing.module'

const routes: Routes = [
  {
    path: '',
    component: Mod3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Mod3RoutingModule
  ],
  declarations: [Mod3Page]
})
export class Mod3PageModule {}
