
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SettingRouterMoudle } from './setting-route.config';
import { HeaderModule } from './../common/header/header.module';
import { SharedService } from './../services/shared.service';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SettingRouterMoudle,
    HeaderModule
  ],
  declarations: [ 
    SettingComponent
    
  ],
  exports: [ ],
  providers: [
    SharedService
  ]
})
export class SettingModule { 
  constructor(){
    console.log('setting module loaded');
  }
}
