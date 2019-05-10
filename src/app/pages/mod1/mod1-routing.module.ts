import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { Mod1Page } from './mod1.page';

const routes: Routes = [

  { path: 'submod11', loadChildren: './submod11/submod11.module#Submod11PageModule' },
  { path: 'submod12', loadChildren: './submod12/submod12.module#Submod12PageModule' },
  { path: 'submod13', loadChildren: './submod13/submod13.module#Submod13PageModule' },
  { path: 'submod14', loadChildren: './submod14/submod14.module#Submod14PageModule' }

];

// const routes: Routes = [
//     {
//       path: '',
//       redirectTo: '/home',
//       pathMatch: 'full'
//     },

//     {
//       path: 'home',
//       component: TabsPage,
//       loadChildren: '../../home/home.module#HomePageModule' 
//     },
    
//   ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class Mod1RoutingModule {}