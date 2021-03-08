import { Component, OnInit } from '@angular/core';
import { TreeService } from './../tree.service';

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
		this.treeFile.fetchTrees().subscribe(response => this.trees = response);
	};

	onEdit(tree) {
		console.log('edit', tree);

		// ToDo
	};
}
