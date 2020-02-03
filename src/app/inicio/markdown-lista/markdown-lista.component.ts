import { Component, OnInit } from "@angular/core";
import { MarkdownService } from '../markdown.service';
import { ObjetoMarkdownInterface } from '../data-markdown';


@Component({
  selector: "markdown-lista",
  templateUrl: "./markdown-lista.component.html",
  styleUrls: ["./markdown-lista.component.scss"]
})
export class MarkDownlistaComponent implements OnInit {

	public data: ObjetoMarkdownInterface[] = [];

	constructor(private readonly markdownService: MarkdownService){}
	ngOnInit(): void {
		this.data = this.markdownService.obtenerTodosLosMarkdowns();
	}

	public seleccionarUnPost(post: ObjetoMarkdownInterface){
		
	}
}
