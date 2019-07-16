import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouterMoudle } from './home-route.config';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HeaderModule } from './../common/header/header.module';
import { HomeComponent } from './home.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterMoudle,
    ModalModule.forRoot(),
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    AddexpenseComponent,
  ],
  entryComponents: [
    AddexpenseComponent
  ]
})
export class HomeModule { }
