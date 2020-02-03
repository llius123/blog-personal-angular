import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CvComponent } from './cv/cv.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MarkdownSimpleComponent } from './inicio/markdown-simple/markdown-simple.component';


const routes: Routes = [
	{
		path: 'inicio',
		children: [
			{
				path: 'lista',
				component: InicioComponent,
			},
			{
				path: ':titulo',
				component: MarkdownSimpleComponent
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'lista'
			}
		]
	},
	{
		path: 'cv',
		component: CvComponent
	},
	{
		path: 'proyectos',
		component: ProyectosComponent
	},
	{
		path: 'contacto',
		component: ContactoComponent
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'inicio/lista'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
