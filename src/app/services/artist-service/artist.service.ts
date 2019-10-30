import{Injectable} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Artist } from './artist';



@Injectable({
    providedIn: 'root'
})
export class ArtistService{
    private apiUrl = "http://176.53.34.37:54685/artist-service/"
    
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

    postData(token : string, data : Artist){
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization' : 'Bearer ' + token,
                'Content-Type' : 'application/json'
            })
        };
        let url = this.apiUrl + "artist";
        return this.http.post<Artist>(url, JSON.stringify(data), httpOptions);    
    }
}