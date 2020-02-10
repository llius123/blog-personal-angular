# BookTracker
## Tecnologias que he usado
Para el frontal he usado 7+ y para el back-end nodejs.
### Frontal
El frontal no esta muy desarrollado ya que lo importante era el back-end pero aun asi he usado:
1. ngx-cookie-service [npm](https://www.npmjs.com/package/ngx-cookie-service)
2. primeng [pagina oficial](https://www.primefaces.org/primeng/#/)
3. Angular 7
### Back-end
He usado:
1. nodejs

Las siguientes librerias:
```json
"body-parser": "^1.18.3" (+ @types/body-parser),
"cookie-parser": "^1.4.4" (+ @types/cookie-parser),
"cors": "^2.8.5" (+ @types/cors),
"express": "^4.16.4" (+ @types/express),
"jsonwebtoken": "^8.5.1"(+ @types/jsonwebtoken),
"mysql": "^2.16.0",
"node-fetch": "^2.3.0",
"reflect-metadata": "^0.1.13",
"typeorm": "^0.2.16",
"xml-js": "^1.6.11",
"@types/node": "^11.13.4",
"@types/node-fetch": "^2.3.2",
"ts-node-dev": "^1.0.0-pre.32",
"typescript": "^3.4.3"
```
> He añadido tambien los @types ya que este back-end esta hecho con typescript
## Descripcion del proyecto
Mi idea principal era hacer una aplicacion web que recopilara datos de distintas bases de datos de distintas paginas web y luego añadirlas a la mia.
La idea al principio era interesante ya que para hacer esto tuve que investigar como transformar datos de distintas bases de datos (json, xml etc..) a objetos js( en esta caso typescript ) y luego insertarlos en mi base de datos.
Tambien estuvo muy interesante ya que me encontre con varios problemas con la syncronia, ya que tenia que estar esperando la respuesta de google books (por ejemplo) luego tratarla, insertarla en mi base de datos y luego devolver al front.
## Cosas interesantes que he aprendido
1. Lo mas interesante a sido añadir typescript a node.
> Typescript me parece muy interesante ya que me estructura la cabeza mucho mas
2. Transformar datos de xml y otros formatos que no sean json
3. Aprender a usar typeorm
## Estado
~~Descontinuado~~
## Links
[Frontal](https://github.com/llius123/todoAPP-web-front-end)
[Back](https://github.com/llius123/todoAPP-web-back-end)
