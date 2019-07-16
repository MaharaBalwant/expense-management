import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRouterMoudle } from './profile-route.config';
import { HeaderModule } from './../common/header/header.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRouterMoudle,
    HeaderModule
  ]
})
export class ProfileModule { }
