import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

	public faces = { 
		"face": { 
			"eyes": ["eyes1", "eyes10", "eyes2", "eyes3", "eyes4", "eyes5", "eyes6", "eyes7", "eyes9"], 
			"nose": ["nose2", "nose3", "nose4", "nose5", "nose6", "nose7", "nose8", "nose9"], 
			"mouth": ["mouth1", "mouth10", "mouth11", "mouth3", "mouth5", "mouth6", "mouth7", "mouth9"],
			"color" : ["ffffff","c90000","fff400","0004ff","00ff00","aa00dd","d787ff","d78700"] 
		} 
	};
	constructor(public http: HttpClient) { }

	/*Creacion de headers*/
	createAuthorizationHeader(): Headers {
		let headers = new Headers();
		headers.append('Accept', 'application/javascript, application/json');
		headers.append('Content-Type', 'application/json');
		return headers;
	}

	getImg() {
		//CORS not allowed !
		/*
		let headers = this.createAuthorizationHeader();
		
		return this.http.get('https://api.adorable.io/avatars/list', headers)
			.map((res: Response) => { res.json(); console.log(res); })
			.catch(err => this._serverError(err));*/
			return this.faces;
	}

	/*Retorna cualquier error al llamar al WebApi*/
	_serverError(err: any) {
		if (err.status === 401) {
			err = "Error de autenticación";
		} else if (err.status === 0) {
			err = "Error conectando al servidor";
		} else {
			err = "Error " + err.status + " - " + err.statusText;
		}
		if (err instanceof Response) {
			return Observable.throw(err.json().error || 'backend server error');
		}
		return Observable.throw(err || 'backend server error');
	}

}
