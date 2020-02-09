import { Injectable } from "@angular/core";
import data from '../../assets/markdown/proyecto/markdown.indice.json';
import { ProyectoListaInterface } from './proyecto-lista/proyecto-lista.component.js';

@Injectable({ providedIn: "root" })
export class MarkdownProyectoService {

	public postMarkdownSeleccinado: ProyectoListaInterface;

	constructor() {}

	public obtenerTodosLosMarkdownsParaLaPestañaProyecto(): ProyectoListaInterface[]{
		const arrayMarkdown: any = data
		return arrayMarkdown;
	}
}