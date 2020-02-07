# El comienzo de mi blog personal
Hola me llamo Jesus y en este primer post voy a explicar las cositas que he usado para crear este blog.

##### Front-end framework-Angular 8
*Porque uso angular 8+ para hacer un simple blog/pagina personal?*
Al principio mi ida fue usar vuepress o gatsbyjs, pero luego se me ocurrio una forma mas o menos automatica para añadir post/apuntes de forma mas rapida gracias a los archivos .md asi que me decante al final por usar angular.
```json
"@angular/core":  "~8.2.14"
```
##### Librerias-Ngx-markdown
Ng-markdown es una libreria que transforma archivos .md en html con una buena sintaxis.
Yo escribo los posts/apuntes en formato .md y simplemente los añado a la carpeta assets y luego por dentro tengo montado un sistema que lee todos los archivos .md que haya y genera la lista que aparece en home.
Bastante completa y con bastantes opciones distintas para transformar los tags md a tags html.
```json
"ngx-markdown":  "^8.2.2",
```
Con este plugin para mejorar los estilos de la parte del codigo.
```json
"prismjs":  "^1.19.0",
```
##### Librerias-Angular-cli-ghpages
Ya que github nos hostea paginas web estaticas he añadido esta libreria para construir y desplegar en github.
Por un lado el comando que he añadido al package.json para desplegar en github
```json
"deploy":  "ng deploy --repo=https://github.com/<username>/<nombre repositorio>.git"
```
```json
"angular-cli-ghpages":  "^0.6.2",
```

