import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
	{
		path: 'inicio',
		children: [
			{
				path: 'lista',
				component: InicioComponent
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'lista'
			}
		]
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
