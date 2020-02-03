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

	constructor(private readonly markdownService: MarkdownService, private readonly router: Router, private readonly http: HttpClient){}
	ngOnInit(): void {
		if(this.markdownService.postMarkdownSeleccinado !== undefined){
			this.markdown = this.markdownService.postMarkdownSeleccinado;
			console.log(this.markdown, `raw-loader!../${this.markdown.archivo}`)
			this.http.get(this.markdown.archivo, {responseType: 'text'}).subscribe(data => {
				this.contenidoMarkdown = data
				console.log(this.contenidoMarkdown)
			});
		}else{
			this.router.navigate(["inicio", "lista"])
		}
	}
}
