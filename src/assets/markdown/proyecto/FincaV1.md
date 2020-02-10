### BookTracker

#### Frontal
1. Angular 7
2. primeng [pagina oficial](https://www.primefaces.org/primeng/#/)
3. jsPDF (Para descargar pdfs)

#### Back-end
1. Java (Framework spring)

#### Descripcion del proyecto
Esta aplicacion fue desarrollado como proyecto final de Grado Superior de Desarrollo de aplicaciones web, por el cual consegui un **10 en la parte frontal y un 10 en la parte back**.
Es una aplicacion a la que le dedique muchas horas ya que era algo que queria hacer perfecto ya que queria conseguir el 10 como nota final.

Esta aplicacion tiene varias funcionalidades: <br />
La mas importante es que consta de 2 perfiles, el de administrador y el de vecino.

**Perfil de administrador:**
1. La primera pantalla consta de 2 listas.
	* La primera columna es una lista de tareas que el administrador o el usuario administrador se a apuntado (enviar electricista a la comunidad X, llamar a la empresa de limpieza para que limpien la comunidad Y etc.
	* La segunda columna es una lista de incidencias que han generado los vecinos desde la parte de Vecinos.
	![alt text][adminImg1]
2. La segunda pantalla es un CRUD general de casi todas las tablas de la base de datos. Esta pantalla permite crear, editar y eliminar registros (Con validaciones de los formularios incluidos).
	![alt text][adminImg2]
3. La tercera es una lista de todas las facturas de la comunidad que esta gestionando con filtros de varios tipos.
	* Tambien permite descargar las facturas en pdf.
	* Las facturas se pueden editar.
	![alt text][adminImg3]
4. La cuarta pantalla consiste en gestionar las incidencias que los vecinos han generado.
	* Las opciones que hay son la de ver la incidencia, la de arreglar la incidencia y la de eliminarla.
	![alt text][adminImg4]

**Perfil de vecino:**
1. La primera pantalla es una lista de facturas que ha generado la comunidad a la que el vecino pertence.
	* Esta pagina tiene varios filtros de busqueda.
	![alt text][adminImg5]
2. La segunda pantalla es una simple pantalla de edicion de datos personales
	![alt text][adminImg6]
3. La tercera pantalla es un formulario de reporte de incidencias, donde el ucuario vecino genera un reporte sobre algo que no funciona bien en la comunidad o sobre alguna duda (la forma mas rapida de ponerse en contacto con el administrador)
	![alt text][adminImg7]

#### Cosas interesantes que he aprendido
1. Con este proyecto mejores mis conocimientos sobre angular 6/7
2. Aprender a usar el framework de java Spring.
3. Mejorar mis conocimientos sobre mysql.
4. Aprender a desplegar la aplicacion en Ubuntu 16.
	> Esta aplicacion la desplegue en un ubuntu server en DigitalOcean, asi que tube que aprender a compilar el frontal y el back.
	* Aparte de solucionar errores de compilacion tambien aprendi a poder conectarme a la bbdd desde fuera de la maquina donde esta alojado la base de datos mysql.

#### Estado
~~Descontinuado~~

#### Links
[Frontal](https://github.com/llius123/fincaV1.webapplication)

[Back](https://github.com/llius123/fincaV1.webapplication)

[adminImg1]: https://i.imgur.com/VR7BLZv.png "Imagen 1 listas de administrador"
[adminImg2]: https://i.imgur.com/npQtVXu.png "Imagen 2 listas de administrador"
[adminImg3]: https://i.imgur.com/I8lh8Rx.png "Imagen 3 listas de administrador"
[adminImg4]: https://i.imgur.com/JRhSROE.png "Imagen 4 listas de administrador"
[adminImg5]: https://i.imgur.com/sjfBpqZ.png "Imagen 5 listas de administrador"
[adminImg6]: https://i.imgur.com/vNFir2U.png "Imagen 6 listas de administrador"
[adminImg7]: https://i.imgur.com/q1MFN5E.png "Imagen 7 listas de administrador"

