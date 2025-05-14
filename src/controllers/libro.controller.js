import { libroService } from "../services/libro.service.js";

export const libroController = {
	async leerArchivo(req, res) {
		const libros = await libroService.serviceLeerArchivo();

		if (!libros) {
			res.status(404).json({
				payload: null,
				message: "no se encontraron libros",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success",
			payload: libros,
			ok: true,
		});
		return;
	},

	async escribirData(req, res) {
		const url = req.body()
		const data = await libroService.serviceEscribirData(url);

		if (!data) {
			res.status(404).json({
				payload: null,
				message: "no se pudo escribir la data",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success",
			payload: data,
			ok: true,
		});
		return;
	},

	async libroValidacion(req, res) {
		const {id} = req.params
		const libros = await libroService.serviceLibroValidacion(id);

		if (!libros) {
			res.status(404).json({
				payload: null,
				message: "no se encontraron libros",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success",
			payload: libros,
			ok: true,
		});
		return;
	},
};
