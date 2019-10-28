import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { TicketingService } from 'src/app/services/ticketing-service/ticketing.service';

@Component({
  selector: 'app-get-ticketing',
  templateUrl: './get-ticketing.component.html',
  styleUrls: ['./get-ticketing.component.css']
})
export class GetTicketingComponent implements OnInit {
 
  private token : string;
  constructor(private authService: AuthService, private ticketingService: TicketingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.getToken().subscribe((data) => {    
      this.ticketingService.getData(data.access_token, "GetTicketingRecord/" + this.route.params["value"].id).subscribe((data) => {
        console.log(data);
      })
    }) 
  }
}
