import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod4Page } from './mod4.page';

const routes: Routes = [
  { path: 'submod41', loadChildren: './submod41/submod41.module#Submod41PageModule' },
  { path: 'submod42', loadChildren: './submod42/submod42.module#Submod42PageModule' },
  { path: 'submod43', loadChildren: './submod43/submod43.module#Submod43PageModule' },
  { path: 'submod44', loadChildren: './submod44/submod44.module#Submod44PageModule' }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class Mod4RoutingModule {}