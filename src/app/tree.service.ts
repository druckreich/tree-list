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

const dummy = [
	{
		"name": "Fichte",
		"age": 120,
		"typ": "Nadelbaum",
		"height": 30
	},
	{
		"name": "Eiche",
		"age": 300,
		"typ": "Laubbaum",
		"height": 28
	},
	{
		"name": "Buche",
		"age": 400,
		"typ": "Laubbaum",
		"height": 40
	},
	{
		"name": "Ahorn",
		"age": 260,
		"typ": "Laubbaum",
		"height": 50
	},
	{
		"name": "Weide",
		"age": 600,
		"typ": "Laubbaum",
		"height": 19
	},
	{
		"name": "Japanische Zierkirsche",
		"age": 90,
		"typ": "Laubbaum",
		"height": 11
	}
]

@Injectable({
	providedIn: 'root'
})
export class TreeService {

	constructor(private http: HttpClient) {

	}

	fetchTrees() {
		console.log('fetch');
		/* 1/2
		const response = this.http.get<treeServiceResponse>('http://127.0.0.1:4200/app/tree.json', {
			params: {
				action: 'query',
				format: 'json'
			}
		}); */

		const response = [...dummy];
		console.log('response', response);
		return response;
	};
}
