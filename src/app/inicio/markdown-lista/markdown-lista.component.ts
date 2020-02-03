import { Component, OnInit } from "@angular/core";
import { MarkdownService } from '../markdown.service';
import { ObjetoMarkdownInterface } from '../data-markdown';
import { Router } from '@angular/router';


@Component({
  selector: "markdown-lista",
  templateUrl: "./markdown-lista.component.html",
  styleUrls: ["./markdown-lista.component.scss"]
})
export class MarkDownlistaComponent implements OnInit {

	public data: ObjetoMarkdownInterface[] = [];

	constructor(private readonly markdownService: MarkdownService, private readonly router: Router){}
	ngOnInit(): void {
		this.data = this.markdownService.obtenerTodosLosMarkdowns();
	}

	public seleccionarUnPost(post: ObjetoMarkdownInterface){
		this.markdownService.postMarkdownSeleccinado = post;
		this.router.navigate(["inicio", `${post.titulo}`])
	}
}
