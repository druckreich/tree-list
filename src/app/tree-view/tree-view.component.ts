import { Component, OnInit } from '@angular/core';
import { TreeService } from './../tree.service';

@Component({
	selector: 'app-tree-view',
	templateUrl: './tree-view.component.html',
	styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

	constructor(private treeFile: TreeService) { }

	ngOnInit(): void {
	}

	getTrees() {
		console.log('getTrees')
		const trees = this.treeFile.fetchTrees()
		console.log('trees', trees)
	}

}
