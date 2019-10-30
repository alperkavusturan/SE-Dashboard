import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { EventService } from '../../../services/event-service/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  
  private token : string;
  events
  constructor(private authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
    this.authService.getToken().subscribe((data) => {    
      this.eventService.getData(data.access_token, "GetEvents").subscribe(data => this.events = data)
    }) 
  }
}
