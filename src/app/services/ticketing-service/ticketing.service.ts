import{Injectable} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class TicketingService{
    private apiUrl = "http://176.53.34.37:54685/ticketing-service/"
    
    constructor(private http: HttpClient){}
    getData(token : string, endpoint : string){
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization' : 'Bearer ' + token
            })
        };
        let url = this.apiUrl + endpoint;
        
        return this.http.get(url, httpOptions);
    }
}