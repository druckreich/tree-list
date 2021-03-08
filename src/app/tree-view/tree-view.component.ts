import { Component, OnInit } from '@angular/core';
import { TreeService } from './../tree.service';

@Component({
	selector: 'app-tree-view',
	templateUrl: './tree-view.component.html',
	styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

	constructor(private treeFile: TreeService) { }
	trees = [];

	ngOnInit(): void {
	}

	getTrees() {
		console.log('getTrees')

		/* 1.
			this.treeFile.fetchTrees().subscribe(response => {
				console.log('response', response);
				// this.trees = response
			}); */

		/* 2.
			console.log('trees', this.trees)
			const tree = this.treeFile.fetchTrees().subscribe(response => console.log('response', response))
			console.log('trees', tree) */

		// dummy data
		this.trees = this.treeFile.fetchTrees()
	}
}
