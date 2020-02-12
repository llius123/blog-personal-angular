### TodoApp

#### Frontal
1. Angular 7
2. ng2-pdf-viewer (Para mostrar pdf)
3. ngx-markdown (Para transformar archivos .md en html)
4. angular-cli-ghpages (Para desplegar en github facilmente)

#### Back-end
1. Nestjs (Servidor REST)
2. mysql (Para conectarme a la bbdd)
3. typeorm (ORM para hacer mas facil todo el trabajo relacionado con la bbdd)
4. swagger-ui-express (Para generar una buena documentacion sobre mis end-points)

#### Descripcion del proyecto
Es una simple aplicacion de gestion de tareas como las 10000 que hay en internet. <br />
La diferencia es que esta aplicacion no esta enfocada a sacar beneficio o para ser vendida, si no para hacerla a mi medida, crear funcionalidades que necesite, adaptarla con mis colores etc...<br />

<img src="assets/markdown/proyecto/img/TodoAppFoto1.png" class="imagen" alt="Markdown Monster icon"/>

<img src="assets/markdown/proyecto/img/TodoAppFoto2.png" class="imagen" alt="Markdown Monster icon"/>

#### Cosas interesantes que he aprendido y que estoy aprendiendo
1. Despliegue en una raspberry
   > Anteriormente ya he despelgado aplicaciones (angular y java) en un servidor de digital ocean, ahora lo que estoy haciendo es desplegarla en un ubuntu server (v16) que tengo instalado en una raspberry que tengo en casa. <br />
   Con esto consigo tener el servidor controlado las 24h, no me cuesta tanto dinero y ademas tengo mas memoria ram de la que me ofrece DigitalOcean.
2. Mejorar mis conocimientos sobre estilos/diseño de interfaces.
3. Mejorar mis conocimientos sobre Typeorm.
4. Aprender a hacer test unitarios sobre el back


#### Lista de tareas
1. Front
   1. [ ] Finalizar la nueva funcionalidad que se llama _tags_
   2. [ ] Revisar que la aplicacion funcione correctamente en todos los dispositivos, ya que tiene que funcionar en todos.
   3. [ ] Revisar el codigo y refactorizar porque creo que se puede mejorar
2. Back
   1. [ ] Revisar y entender porque cuando hago servicios tipo _POST_ tengo que importar el _@Request_ y no puedo simplemente obtener los _query params_
   2. [ ] Mejorar las querys.
		> Por ahora todas las querys funcionan pero hay muchisimo codigo duplicado, lo que hay que hacer es crear funciones genericas para hacer simples CRUDS y reducir la duplicidad de codigo.
   3. [ ] Configurar el sistema de logs.
		> Por ahora no esta configurado pero creo recordar que NestJS tiene alguna libreria que permite crear logs.
   4. [ ] Revisar que pasa en la rasp que a veces da unos 500 muy raros
3. Raspberry
   1. [ ] Añadir el jenkins.
   2. [ ] Probar a cambiar Apache por nginx.
   3. [ ] Configurar el famoso F5 con angular para que cuango haga F5 no se rompa la aplicacion.

#### Futuras funcionalidades
1. [ ] Añadir storybook al frontal.
2. [ ] Añadir markdown
   > Lo que quiero hacer cone esto es migrar todos mis apuntes que tengo en OneNote migrarlos a archivos tipo md y crear un editor de archivos md donde poder editar/crear/eliminar documentos y asi tener mi propia nube de conocimiento gestionada en mi propia nube.
3. [ ] Añadir un sistema cloud de archivos (poder subir fotos, otro tipo de documentos etc...)

#### Estado
En desarrollo

#### Links
[Frontal](https://github.com/llius123/todoAPP-web-front-end) <br />
[Back](https://github.com/llius123/todoAPP-web-back-end)

#### Notas personales
Es un proyecto muy ambicioso, pero si voy poco a poco yo creo que me puede quedar algo muy chulo y muy util para mi, ya que crear mi propia nube con las funcionalidades que yo considere puede estar muy bien, ademas de aprender nuevas cosas sobre 
* angular
* nodejs
* ubuntu
* CI <br />

y mas tecnologias, ya que si esto continua desarrollandose al final tendre que aprender sobre: 
* seguridad
* mejor encriptacion de datos
* mas conocimiento sobre ubuntu. 

[TodoAppImg1]: https://i.imgur.com/VR7BLZv.png "Imagen 1 listas de administrador"