import { Component } from '@angular/core';

@Component({
	selector: 'navegacion-izquierda',
	templateUrl: './navegacion-izquierda.component.html',
	styleUrls: ['./navegacion-izquierda.component.scss']
})
export class ColumnaIzquierdaComponent {

	public link(nombre: string){
		console.log('hola')
		switch (nombre) {
			case 'linkedin':
				break;
			case 'github':
				break;
			case 'home':
				break;
			case 'cv':
				break;
			case 'proyectos':
				break;
			case 'contacto':
				break;
		}

	}
}
