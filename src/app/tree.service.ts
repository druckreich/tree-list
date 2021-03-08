import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tree } from './tree.model';


@Injectable({
	providedIn: 'root'
})
export class TreeService {

	constructor(private http: HttpClient) { }

	trees: Tree[] = []; 

	fetchTrees() {
		const response = this.http.get<Tree>('http://127.0.0.1:4200/assets/tree.json');

		return response;
	};
}
