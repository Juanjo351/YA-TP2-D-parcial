import { JsonHandler } from "../utils/jsonHandler.js";

export const libroRepository = {
	async repositoryLeerArchivo() {
		return await JsonHandler.read();
	},

	async repositoryEscribirData(data) {
		await JsonHandler.write(data)
		return await JsonHandler.read();
	},

	async getById(idLibro){
		const libros = await JsonHandler.read();

		if (!libros) return null;

		const libro = libros.find((libro) => libro.id === idLibro);

		if (!libro) return null;

		return libro;
	}
};
