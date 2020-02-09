import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'cv',
	templateUrl: './cv.component.html',
	styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

	public pdfSrc: string;
	constructor(){}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.pdfSrc = 'assets/CV.pdf';
	}
	
	public descargarPDF(){
		window.open('https://llius123.github.io/blog-personal-angular/assets/CV.pdf');
	}
}
