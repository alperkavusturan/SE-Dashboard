import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListArtistsComponent } from './components/artist/list-artists/list-artists.component';

import{HttpClientModule} from '@angular/common/http';
import{AuthService} from './services/auth-service/auth.service';
import { ListEventsComponent } from './components/event/list-events/list-events.component';
import { ListProfilesComponent } from './components/profile/list-profiles/list-profiles.component';
import { ListVenuesComponent } from './components/venue/list-venues/list-venues.component';
import { ListTicketingsComponent } from './components/ticketing/list-ticketings/list-ticketings.component';
import { GetArtistComponent } from './components/artist/get-artist/get-artist.component';
import { GetEventComponent } from './components/event/get-event/get-event.component';
import { GetProfileComponent } from './components/profile/get-profile/get-profile.component';
import { GetTicketingComponent } from './components/ticketing/get-ticketing/get-ticketing.component';
import { GetVenueComponent } from './components/venue/get-venue/get-venue.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    ListArtistsComponent,
    ListEventsComponent,
    ListProfilesComponent,
    ListVenuesComponent,
    ListTicketingsComponent,
    GetArtistComponent,
    GetEventComponent,
    GetProfileComponent,
    GetTicketingComponent,
    GetVenueComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
