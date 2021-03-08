import { Component, OnInit } from '@angular/core';
import { TreeService } from './../tree.service';
import { Tree } from '../tree.model';

@Component({
	selector: 'app-tree-view',
	templateUrl: './tree-view.component.html',
	styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

	constructor(private treeFile: TreeService) { }
	trees;

	ngOnInit(): void {
	}

	getTrees() {
		let data;
		this.treeFile.fetchTrees().subscribe(data => this.trees = data);
	};

	onEdit(tree) {
		console.log('edit', tree);

		// ToDo
	};
}
