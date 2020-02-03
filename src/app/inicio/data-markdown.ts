export interface ObjetoMarkdownInterface {
	id: number;
	titulo: string;
	descripcion: string;
	archivo: string;
}
export const data: ObjetoMarkdownInterface[] = [
	{
		id: 1,
		titulo: "Test post",
		descripcion: "Priemr post de prueba",
		archivo: "../assets/markdown/test.md"
	}
]