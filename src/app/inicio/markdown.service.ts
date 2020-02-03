import { Injectable } from "@angular/core";
import { data, ObjetoMarkdownInterface } from "./data-markdown";

@Injectable({ providedIn: "root" })
export class MarkdownService {

	constructor() {}

	/**
	 * Obtengo todos los datos del Markdown
	 */
	public obtenerTodosLosMarkdowns(): ObjetoMarkdownInterface[]{
		return data;
	}
}