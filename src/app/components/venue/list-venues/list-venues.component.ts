import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { VenueService } from '../../../services/venue-service/venue.service';

@Component({
  selector: 'app-list-venues',
  templateUrl: './list-venues.component.html',
  styleUrls: ['./list-venues.component.css']
})
export class ListVenuesComponent implements OnInit {
  
  private token : string;
  constructor(private authService: AuthService, private venueService: VenueService) { }

  ngOnInit() {
    this.authService.getToken().subscribe((data) => {    
      this.venueService.getData(data.access_token, "GetVenues").subscribe((data) => {
        console.log(data);
      })
    }) 
  }
}
