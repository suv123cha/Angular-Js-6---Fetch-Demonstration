import { Component } from '@angular/core';
import { Service } from './services/service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  providers: [Service],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
	/**
	 * Used for storing the data object which is returned from the API Call.
	 */
	public userData;

	title = "Simple Integration Of Normal GET API \n";
	jsonUrl = "http://www.json-generator.com/api/json/get/bVhQaMOFcO?indent=2";

	constructor(private _service:Service)
	{

	}

	/**
	 * The function will be called as soon as the page is
	 * being loaded.
	 */
	ngOnInit() 
	{
		this.getUserDetails();
	}
	
	/**
	 * The subscribe() method takes three arguments which are event handlers. 
	 * They are called onNext, onError, and onCompleted. 
	 * The onNext method will receive the HTTP response data. 
	 * Observables support streams of data and can call this event handler multiple times.
	 * In the case of the HTTP request, however, the Observable will usually emit the whole data set in one call. 
	 * The onError event handler is called if the HTTP request returns an error code such as a 404. 
	 * The onCompleted event handler executes after the Observable has finished returning all its data. 
	 * This is less useful in the case of the Http.get() call, because all the data we need is passed into the onNext handler.
	 */
	getUserDetails() 
	{
		this._service.getUserDetails().subscribe
		(
			data => 
			{
				console.log(data);
				this.userData = data;
			},
	      	err => console.error(err),
	      	() => console.log('done loading foods')
	    );
	  }
}
