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
		/*
			this.treeFile.fetchTrees().subscribe(response => {
			console.log('response', response);
			this.trees = response
		}); */

		console.log('trees', this.trees)
		this.trees = this.treeFile.fetchTrees()
		console.log('trees', this.trees)
	}

}
