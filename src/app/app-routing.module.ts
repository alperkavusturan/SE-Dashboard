import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArtistsComponent } from './components/artist/list-artists/list-artists.component';
import { ListEventsComponent } from './components/event/list-events/list-events.component';
import { ListProfilesComponent } from './components/profile/list-profiles/list-profiles.component';
import { ListVenuesComponent } from './components/venue/list-venues/list-venues.component';
import { ListTicketingsComponent } from './components/ticketing/list-ticketings/list-ticketings.component';
import { GetArtistComponent } from './components/artist/get-artist/get-artist.component';
import { GetEventComponent } from './components/event/get-event/get-event.component';
import { GetProfileComponent } from './components/profile/get-profile/get-profile.component';
import { GetTicketingComponent } from './components/ticketing/get-ticketing/get-ticketing.component';
import { GetVenueComponent } from './components/venue/get-venue/get-venue.component';
import { AddArtistComponent } from './components/artist/add-artist/add-artist.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'list-artists', component: ListArtistsComponent},
  { path: 'get-artist/:id', component: GetArtistComponent},
  { path: 'add-artist', component: AddArtistComponent},

  { path: 'list-events', component: ListEventsComponent},
  { path: 'get-event/:id', component: GetEventComponent},

  { path: 'list-profiles', component: ListProfilesComponent},
  { path: 'get-profile/:id', component: GetProfileComponent},

  { path: 'list-venues', component: ListVenuesComponent},
  { path: 'get-venue/:id', component: GetVenueComponent},

  { path: 'list-ticketings', component: ListTicketingsComponent},
  { path: 'get-ticketing/:id', component: GetTicketingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
