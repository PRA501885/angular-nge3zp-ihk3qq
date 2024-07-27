import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DestinationComponent } from './destination/destination.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { TravelService } from './travel.service';

@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    AccommodationComponent,
    TotalCostComponent,
  ],
  imports: [BrowserModule],
  providers: [TravelService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
