import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod2Page } from './mod2.page';

const routes: Routes = [
  { path: 'submod21', loadChildren: './submod21/submod21.module#Submod21PageModule' },
  { path: 'submod22', loadChildren: './submod22/submod22.module#Submod22PageModule' },
  { path: 'submod23', loadChildren: './submod23/submod23.module#Submod23PageModule' },
  { path: 'submod24', loadChildren: './submod24/submod24.module#Submod24PageModule' }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class Mod2RoutingModule {}