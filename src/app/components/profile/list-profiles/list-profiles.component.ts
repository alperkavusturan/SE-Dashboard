import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { ProfileService } from '../../../services/profile-service/profile.service';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {
  
  private token : string;
  constructor(private authService: AuthService, private profileService: ProfileService) { }

  ngOnInit() {
    this.authService.getToken().subscribe((data) => {    
      this.profileService.getData(data.access_token, "GetProfiles").subscribe((data) => {
        console.log(data);
      })
    }) 
  }
}
