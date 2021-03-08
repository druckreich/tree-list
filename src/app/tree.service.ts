import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface treeServiceResponse {
	trees: [
		{
			name: string,
			age: number,
			typ: string,
			height: number
		}
	]
}

@Injectable({
	providedIn: 'root'
})
export class TreeService {

	constructor(private http: HttpClient) { }

	fetchTrees() {
		const response = this.http.get<treeServiceResponse>('http://127.0.0.1:4200/assets/tree.json');

		return response;
	};
}
