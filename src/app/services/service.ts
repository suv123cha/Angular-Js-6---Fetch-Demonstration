import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
const httpOptions = 
{
    headers: new HttpHeaders
    (
        { 
            "Content-Type": "application/json" 
        }
    )
};
 
@Injectable()
export class Service 
{
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getUserDetails() 
    {
        return this.http.get("http://www.json-generator.com/api/json/get/bVhQaMOFcO?indent=2");
    }
}