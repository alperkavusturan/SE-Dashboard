import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ArtistService } from 'src/app/services/artist-service/artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-artist',
  templateUrl: './get-artist.component.html',
  styleUrls: ['./get-artist.component.css']
})
export class GetArtistComponent implements OnInit {
  
  private token : string;
  constructor(private authService: AuthService, private artistService: ArtistService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.authService.getToken().subscribe((data) => {    
      this.artistService.getData(data.access_token, "GetArtist/" + this.route.params["value"].id).subscribe((data) => {
        console.log(data);
      })
    }) 
  }

}
