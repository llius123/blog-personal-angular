### Gestor de facturas

#### Frontal
Para desarrollar esta aplicacion he usado las siguientes tecnologias:
1. Angular 6.
2. Bootstrap 4.
3. firebase 5.
4. html2canvas 1
5. npm-run-all 4
6. electron 3.0.5

#### Descripcion del proyecto
La idea es simple, es un generador de facturas hecho principalmente con angular y electron.
Lo bueno de usar electron es que la aplicacion una vez la desarrollas es multiplataforma (linux, ios, windows).
Cuando estaba desarrollando esta aplicacion le añadi varias funcionalidades como una vez generado la factura, los datos se guardan en firebase.
Gracias a la libreria de firebase para angular no es necesario crear un servidor (con node/java) para insertar datos en la bbdd.
Otra funcionalidad buena es la de generar el pdf. Gracias a la libreria html2cavas convertia el html en pdf y lo conseguia descargar.
Fue un poco complicado añadir esta funcionalidad ya que la libreria no pillaba el css que se estaba usando en el html y se rompia todo, pero al final consegui que html2canvas pillara los css.

#### Cosas interesantes que he aprendido
1. Aprender a usar Electron (construir la aplicacion y probarla en windows y linux (con una maquina virtual)).
2. Usar la libreria html2cavas y configurarlo bien para que pille el css del html.
3. Crear una base de datos en firebase, añadir datos, actualizarlo y eliminarlo
> Esto es interesante ya que firebase es una bbdd no sql y es algo que nunca habia tocado

#### Estado
~~Descontinuado~~

#### Links
[Github](https://github.com/llius123/angular6-electronV2)
