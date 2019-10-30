import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { TicketingService } from '../../../services/ticketing-service/ticketing.service';

@Component({
  selector: 'app-list-ticketings',
  templateUrl: './list-ticketings.component.html',
  styleUrls: ['./list-ticketings.component.css']
})
export class ListTicketingsComponent implements OnInit {
  
  private token : string;
  records
  constructor(private authService: AuthService, private ticketingService: TicketingService) { }

  ngOnInit() {
    this.authService.getToken().subscribe((data) => {    
      this.ticketingService.getData(data.access_token, "GetTicketingRecords").subscribe(data => this.records = data)
    }) 
  }
}
