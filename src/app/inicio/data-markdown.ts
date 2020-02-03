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
		archivo: "../assets/markdown/test.md"
	},
	{
		id: 2,
		titulo: "Test post 2",
		descripcion: "Priemr post de prueba 2",
		fecha: "03/02/2020",
		archivo: "../assets/markdown/test.md"
	}
]