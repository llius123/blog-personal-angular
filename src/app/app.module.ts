//@Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//Rutas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ColumnaIzquierdaComponent } from './navegacion-izquierda/navegacion-izquierda.component';
import { MarkDownlistaComponent } from './inicio/markdown-lista/markdown-lista.component';
import { MarkdownService } from './inicio/markdown.service';
import { CvComponent } from './cv/cv.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MarkdownSimpleComponent } from './inicio/markdown-simple/markdown-simple.component';
//Librerias externas
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { PdfViewerModule } from 'ng2-pdf-viewer';

//Configuracion del markdown
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
	ColumnaIzquierdaComponent,
	MarkDownlistaComponent,
	CvComponent,
	ProyectosComponent,
	ContactoComponent,
	MarkdownSimpleComponent
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
		}, }),
	PdfViewerModule
],
providers: [MarkdownService],
bootstrap: [AppComponent]
})
export class AppModule {}
