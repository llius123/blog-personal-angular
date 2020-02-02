import { Component, OnInit, HostListener } from '@angular/core';
// import blockquotes from 'raw-loader!../../assets/markdown/blockquotes.md'


@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  //#region markdown
  blockquotes;
  codeAndSynthaxHighlighting;
  emphasis;
  headers;
  horizontalRule;
  images;
  links;
  lists;
  listsDot;
  tables;

  ngOnInit(): void {
	this.blockquotes = require('raw-loader!../../assets/markdown/blockquotes.md').default;
	this.codeAndSynthaxHighlighting = require('raw-loader!../../assets/markdown/code-and-synthax-highlighting.md').default;
	this.emphasis = require('raw-loader!../../assets/markdown/emphasis.md').default;
	this.headers = require('raw-loader!../../assets/markdown/headers.md').default;
	this.horizontalRule = require('raw-loader!../../assets/markdown/horizontal-rule.md').default;
	this.images = require('raw-loader!../../assets/markdown/images.md').default;
	this.links = require('raw-loader!../../assets/markdown/links.md').default;
	this.lists = require('raw-loader!../../assets/markdown/lists.md').default;
	this.listsDot = require('raw-loader!../../assets/markdown/lists-dot.md').default;
	this.tables = require('raw-loader!../../assets/markdown/tables.md').default;
	console.log(this.blockquotes)
  }


}
