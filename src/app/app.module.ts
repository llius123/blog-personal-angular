import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ColumnaIzquierdaComponent } from './navegacion-izquierda/navegacion-izquierda.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

export function markedOptions(): MarkedOptions {
	const renderer = new MarkedRenderer();
  
	renderer.blockquote = (text: string) => {
	  return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
	};
  
	return {
	  renderer: renderer,
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  smartLists: true,
	  smartypants: false,
	};
  }

@NgModule({
  declarations: [
	AppComponent,
	InicioComponent,
	ColumnaIzquierdaComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	MarkdownModule.forRoot({ 
		loader: HttpClient,
		markedOptions: {
		  provide: MarkedOptions,
		  useFactory: markedOptions,
		}, })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
