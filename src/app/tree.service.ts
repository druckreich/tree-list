import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


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

	constructor(private http: HttpClient) { }

	fetchTrees() {
		console.log('fetch')
		// const response = this.http.get<treeServiceResponse>('src/app/tree.json')
		// console.log('response', response)
		const response = [...dummy]
		return response
	}
}
