import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { OfferComponent } from './offer/offer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfferListComponent } from './offer-list/offer-list.component';


const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'offerList', component: OfferListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


 }
