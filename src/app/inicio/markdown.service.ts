import { Injectable } from "@angular/core";
import { ObjetoMarkdownInterface } from './inicio.component';
import data from "../../assets/markdown/blog/markdown.indice.json";

@Injectable({ providedIn: "root" })
export class MarkdownService {

	public postMarkdownSeleccinado: ObjetoMarkdownInterface;

	constructor() {}

	/**
	 * Obtengo todos los datos del Markdown
	 */
	public obtenerTodosLosMarkdowns(): ObjetoMarkdownInterface[]{
		const arrayMarkdown: any = data
		return arrayMarkdown;
	}
}