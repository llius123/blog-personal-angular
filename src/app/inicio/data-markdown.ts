export interface ObjetoMarkdownInterface {
	id: number;
	titulo: string;
	descripcion: string;
	fecha: string;
	archivo: string;
}
export const data: ObjetoMarkdownInterface[] = [
	{
		id: 1,
		titulo: "Test post",
		descripcion: "Priemr post de prueba",
		fecha: "03/02/2020",
		archivo: "assets/markdown/test.md"
	},
	{
		id: 2,
		titulo: "Creacion de la pagina persona",
		descripcion: "Como he construido mi propia pagina personal y que queda por añadir",
		fecha: "04/02/2020",
		archivo: "assets/markdown/creacion-pagina-personal.md"
	}
]