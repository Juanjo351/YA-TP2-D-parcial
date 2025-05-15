import { libroRepository } from "../repositories/libro.repository.js";

export const libroService = {
	async serviceLeerArchivo(req, res) {
		return await libroRepository.repositoryLeerArchivo();
	},

	async serviceEscribirData(url){
		const data = await fetch(url).then(res => res.json)
		return await libroRepository.repositoryEscribirData(data)
	},

	async serviceLibroValidacion(id){
		const idLibro = libroRepository.getById(id);

		if (!idLibro) return null;

		return idLibro;
	},

	TicketCreation: (libro) => {
		const dataLibro = {
			...libro,
			id: crypto.randomUUID().toString(),
			isbn: crypto.randomUUID().toString(),
			publishedDate:new Date() ,
			availableCopies: Math.floor(Math.random() * 100) + 1
		};

		const modelLibro = new libro(dataLibro.id, dataLibro.title, dataLibro.author, dataLibro.isbn, dataLibro.publishedDate, dataLibro.availableCopies);

		libroRepository.createOne(modelLibro);

		return modelLibro;
	},

	serviceLibroDelete: (id) => {
		const idLibro = libroRepository.deleteById(id);
		if (!idLibro) return null;
		return idLibro;
	},
};
