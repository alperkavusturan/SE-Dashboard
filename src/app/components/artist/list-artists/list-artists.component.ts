import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { ArtistService } from '../../../services/artist-service/artist.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {
  
  private token : string;
  artists
  constructor(private authService: AuthService, private artistService: ArtistService) { }
 
  ngOnInit() {
    this.authService.getToken().subscribe((data) => {    
      this.artistService.getData(data.access_token, "GetArtists").subscribe(data => this.artists = data);
    }) 
  }
}
