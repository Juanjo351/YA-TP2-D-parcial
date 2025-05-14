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
	}
};
