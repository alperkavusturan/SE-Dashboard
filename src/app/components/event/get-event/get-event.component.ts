import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { EventService } from 'src/app/services/event-service/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-event',
  templateUrl: './get-event.component.html',
  styleUrls: ['./get-event.component.css']
})
export class GetEventComponent implements OnInit {

  private token : string;
  constructor(private authService: AuthService, private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.getToken().subscribe((data) => {    
      this.eventService.getData(data.access_token, "GetEvent/" + this.route.params["value"].id).subscribe((data) => {
        console.log(data);
      })
    }) 
  }

}
