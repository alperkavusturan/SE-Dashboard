import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { VenueService } from 'src/app/services/venue-service/venue.service';

@Component({
  selector: 'app-get-venue',
  templateUrl: './get-venue.component.html',
  styleUrls: ['./get-venue.component.css']
})
export class GetVenueComponent implements OnInit {
  private token : string;
  constructor(private authService: AuthService, private venueService: VenueService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.getToken().subscribe((data) => {    
      this.venueService.getData(data.access_token, "GetVenue/" + this.route.params["value"].id).subscribe((data) => {
        console.log(data);
      })
    }) 
  }
}
