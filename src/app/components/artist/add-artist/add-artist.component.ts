import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ArtistService } from 'src/app/services/artist-service/artist.service';
import { Artist } from 'src/app/services/artist-service/artist';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  private token: string;
  artist: Artist;

  constructor(private authService: AuthService, private artistService: ArtistService) { }

  ngOnInit() {
    this.authService.getToken().subscribe((data) => {
      this.artistService.postData(data.access_token, this.artist).subscribe((data) => {
        console.log(data)
      });
    })
  }

}
