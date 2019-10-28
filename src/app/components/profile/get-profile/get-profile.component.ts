import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ProfileService } from 'src/app/services/profile-service/profile.service';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {

  private token : string;
  constructor(private authService: AuthService, private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.getToken().subscribe((data) => {    
      this.profileService.getData(data.access_token, "GetProfile/" + this.route.params["value"].id).subscribe((data) => {
        console.log(data);
      })
    }) 
  }
}
