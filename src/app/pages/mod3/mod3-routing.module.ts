import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod3Page } from './mod3.page';

const routes: Routes = [
  { path: 'submod31', loadChildren: './submod31/submod31.module#Submod31PageModule' },
  { path: 'submod32', loadChildren: './submod32/submod32.module#Submod32PageModule' },
  { path: 'submod33', loadChildren: './submod33/submod33.module#Submod33PageModule' },
  { path: 'submod34', loadChildren: './submod34/submod34.module#Submod34PageModule' }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class Mod3RoutingModule {}