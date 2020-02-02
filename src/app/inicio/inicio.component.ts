import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import test from "raw-loader!../../assets/test.md" // substitute this path with your README.md file path
import { MarkdownService } from 'ngx-markdown';
import { of } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  //#region markdown
  blockquotes = require('raw-loader!../../assets/markdown/blockquotes.md');
  codeAndSynthaxHighlighting = require('raw-loader!../../assets/markdown/code-and-synthax-highlighting.md');
  emphasis = require('raw-loader!../../assets/markdown/emphasis.md');
  headers = require('raw-loader!../../assets/markdown/headers.md');
  horizontalRule = require('raw-loader!../../assets/markdown/horizontal-rule.md');
  images = require('raw-loader!../../assets/markdown/images.md');
  links = require('raw-loader!../../assets/markdown/links.md');
  lists = require('raw-loader!../../assets/markdown/lists.md');
  listsDot = require('raw-loader!../../assets/markdown/lists-dot.md');
  tables = require('raw-loader!../../assets/markdown/tables.md');


}
