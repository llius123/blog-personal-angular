import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'navegacion-izquierda',
	templateUrl: './navegacion-izquierda.component.html',
	styleUrls: ['./navegacion-izquierda.component.scss']
})
export class ColumnaIzquierdaComponent {

	constructor(private readonly router: Router){}

	public link(nombre: string){
		console.log('hola')
		switch (nombre) {
			case 'linkedin':
				window.open('https://www.linkedin.com/in/jesusberisanu%C3%B1ez/', '_blank')
				break;
			case 'github':
				window.open('https://github.com/llius123', '_blank')
				break;
			case 'home':
				this.router.navigate(["inicio","lista"])
				break;
			case 'cv':
				this.router.navigate(["cv"])
				break;
			case 'proyectos':
				this.router.navigate(["proyectos"])
				break;
			case 'contacto':
				this.router.navigate(["contacto"])
				break;
		}

	}
}
