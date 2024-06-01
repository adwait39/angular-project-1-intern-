import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubeventsRoutingModule } from './clubevents-routing.module';
import { ClubeventsComponent } from './clubevents/clubevents.component';


@NgModule({
  declarations: [
    ClubeventsComponent
  ],
  imports: [
    CommonModule,
    ClubeventsRoutingModule
  ]
})
export class ClubeventsModule { }
