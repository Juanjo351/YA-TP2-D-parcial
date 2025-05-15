import { JsonHandler } from "../utils/jsonHandler.js";

export const libroRepository = {
	async repositoryLeerArchivo() {
		return await JsonHandler.read();
	},

	async repositoryEscribirData(data) {
		await JsonHandler.write(data);
		return await JsonHandler.read();
	},

	async getById(idLibro) {
		const libros = await JsonHandler.read();

		if (!libros) return null;

		const libro = libros.find((libro) => libro.id === idLibro);

		if (!libro) return null;

		return libro;
	},

	createOne: async (libro) => {
		const libros = await JsonHandler.read();
		libros.push(libro);
		try {
			await JsonHandler.write(libros);
		} catch (e) {
			console.error({ message: e.message });
		}
	},

	deleteById: async (id) => {
		const libros = await JsonHandler.read();
		if (!libros) return null;

		const index = libros.find((libro) => libro.id === id);

		if (!index) return;

		const libroResponse = libros.filter((libro) => libro.id !== id);

		try {
			await JsonHandler.write(libroResponse);
			return id;
		} catch (e) {
			return null;
		}
	},

	updateById: async (id, availableCopies) => {
		const libros = await JsonHandler.read();
		const librosResponse = libros.filter((libro) => libro.id === id);
		const librosOld = libros.filter((libro) => libro.id !== id);
		const newAvailableCopies = availableCopies;
		const modifiedLibros = librosResponse.map((libro) => ({
			...libro,
			availableCopies: newAvailableCopies,
		}));
		try {
			await JsonHandler.write([...librosOld, ...modifiedLibros]);
			return modifiedLibros;
		} catch (e) {
			return null;
		}
	},
};
