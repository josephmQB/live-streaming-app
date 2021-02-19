import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveStreamRoutingModule } from './live-stream-routing.module';
import { HostComponent } from './components/host/host.component';
import { AudienceComponent } from './components/audience/audience.component';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [HostComponent, AudienceComponent],
  imports: [
    CommonModule,
    LiveStreamRoutingModule,
    ClipboardModule
  ],
  exports: [
    HostComponent,
    AudienceComponent
  ]
})
export class LiveStreamModule { }
