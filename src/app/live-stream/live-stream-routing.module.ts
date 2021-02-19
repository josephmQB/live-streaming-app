import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudienceComponent } from './components/audience/audience.component';
import { HostComponent } from './components/host/host.component';

const routes: Routes = [
  {path: 'live-stream/host', component: HostComponent},
  {path: 'live-stream/audience', component: AudienceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveStreamRoutingModule { }
