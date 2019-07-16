import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingModule' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
