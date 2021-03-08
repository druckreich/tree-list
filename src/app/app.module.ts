import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		AppComponent,
		TreeViewComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatListModule,
		MatButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
