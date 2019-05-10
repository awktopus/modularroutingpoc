import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'mod1', loadChildren: './pages/mod1/mod1.module#Mod1PageModule' },
  { path: 'mod2', loadChildren: './pages/mod2/mod2.module#Mod2PageModule' },
  { path: 'mod3', loadChildren: './pages/mod3/mod3.module#Mod3PageModule' },
  { path: 'mod4', loadChildren: './pages/mod4/mod4.module#Mod4PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
