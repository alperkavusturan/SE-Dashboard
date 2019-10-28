import{Injectable} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthServiceResponse } from './service-response';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type' : 'application/json'
    })
};

let data = {
    "Username":"abc",
	"Password":"123"
}

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private apiUrl = "http://176.53.34.37:8181/api/auth/getToken"
    
    constructor(private http: HttpClient){}
    getToken(){
        return this.http.post<AuthServiceResponse>(this.apiUrl, JSON.stringify(data), httpOptions);
    }
}