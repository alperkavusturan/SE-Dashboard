import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArtistsComponent } from './components/artist/list-artists/list-artists.component';
import {ListEventsComponent } from './components/event/list-events/list-events.component';
import {ListProfilesComponent } from './components/profile/list-profiles/list-profiles.component';
import { ListVenuesComponent } from './components/venue/list-venues/list-venues.component';
import { ListTicketingsComponent } from './components/ticketing/list-ticketings/list-ticketings.component';

const routes: Routes = [
  { path: 'list-artists', component: ListArtistsComponent},
  { path: 'list-events', component: ListEventsComponent},
  { path: 'list-profiles', component: ListProfilesComponent},
  { path: 'list-venues', component: ListVenuesComponent},
  { path: 'list-ticketings', component: ListTicketingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
