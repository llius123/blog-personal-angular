import { Component, OnInit } from "@angular/core";

export interface ObjetoMarkdownInterface {
	id: number;
	titulo: string;
	descripcion: string;
	fecha: string;
	archivo: string;
}

@Component({
  selector: "inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"]
})
export class InicioComponent implements OnInit {
	public test;

	ngOnInit(): void {
		this.test = require("raw-loader!../../assets/markdown/test.md").default;
	}


}
