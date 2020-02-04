import { Component, OnInit } from "@angular/core";
import { MarkdownService } from '../markdown.service';
import { ObjetoMarkdownInterface } from '../data-markdown';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "markdown-simple",
  templateUrl: "./markdown-simple.component.html",
  styleUrls: ["./markdown-simple.component.scss"]
})
export class MarkdownSimpleComponent implements OnInit {

	public markdown: ObjetoMarkdownInterface;
	public contenidoMarkdown: any;

	public indice: string[] = [];
	constructor(private readonly markdownService: MarkdownService, private readonly router: Router, private readonly http: HttpClient){}
	ngOnInit(): void {
		if (this.markdownService.postMarkdownSeleccinado !== undefined){
			this.markdown = this.markdownService.postMarkdownSeleccinado;
			this.http.get(this.markdown.archivo, {responseType: "text"}).subscribe(data => {
				this.contenidoMarkdown = data;
				this.crearIndiceAPartirMarkdownEntero(this.contenidoMarkdown)
			});
		} else {
			this.router.navigate(["inicio", "lista"])
		}
	}

	public crearIndiceAPartirMarkdownEntero(mardownFormatoString: string){
		// Recorro linea a linea del markdown
		for (const line of mardownFormatoString.split(/[\r\n]+/)){
			// Si una linea comienza por # significa que es un titulo
			if (line.charAt(0) === "#"){
				let inicioTitulo = 0;
				// Recorro losc aracteres de la linea para encontrar el texto del titulo
				for (let index = 0; index < line.length; index++) {
					if (line.charAt(index) !== "#") {
						inicioTitulo = index;
						index = line.length;
					}
				}
				// Sumo 1 para quitar el espacio de delante del titulo
				inicioTitulo++;
				// Guardo el string resultante en el array de indices
				this.indice.push(line.substr(inicioTitulo, line.length));
			} else {
				// console.log('adios')
			}
			// console.log(line);
		}
	}
	scroll(el: string) {
		console.log(el)
		el = el.split(' ').join('-');
		el.charAt(0).toLowerCase();
		console.log(el)
		let le = document.getElementById(el);
		le.scrollIntoView({behavior:"smooth"});
	}
}
