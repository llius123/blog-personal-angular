import { Component, OnInit } from '@angular/core';
import { ObjetoMarkdownInterface } from 'src/app/inicio/inicio.component';
import { MarkdownProyectoService } from '../markdown-proyecto.service';
import { Router } from '@angular/router';

export interface ProyectoListaInterface{
	id: number;
	titulo: string;
	foto: string;
	descripcion: string;
	descontinuado: boolean;
	archivo: string;
	tituloArchivo: string;
}
@Component({
	selector: 'proyecto-lista',
	templateUrl: './proyecto-lista.component.html',
	styleUrls: ['./proyecto-lista.component.scss']
})
export class ProyectoListaComponent implements OnInit {

	public proyectos: ProyectoListaInterface[] = []
	constructor(private proyectoMarkdownService: MarkdownProyectoService, private readonly router: Router){}

	ngOnInit(): void {
		this.proyectos = this.proyectoMarkdownService.obtenerTodosLosMarkdownsParaLaPestañaProyecto();
	}

	public proyectoSeleccionado(proyecto: ProyectoListaInterface){
		this.proyectoMarkdownService.postMarkdownSeleccinado = proyecto;
		this.router.navigate(["proyectos", proyecto.tituloArchivo])
	}

}
