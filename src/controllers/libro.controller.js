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
		const url = req.body();
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
		const { id } = req.params;
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

	libroCreateOne: async (req, res) => {
		const { ticket } = req.body;
		try {
			const libroResponse = TicketService.serviceTicketCreation(ticket);
			res.status(200).json({
				message: "Success",
				payload: { ...libroResponse, title: "******" },
				ok: true,
			});
			return;
		} catch (e) {
			console.log({ message: e.message, message: "algo salio mal" });
			res.status(404).json({
				payload: null,
				message: "No se pudo crear el libro",
				ok: false,
			});
			return;
		}
	},

	libroDeleteOne: async (req, res) => {
		const { id } = req.params;
		const idLibro = await libroService.serviceLibroDelete(id);

		if (!idLibro) {
			res.status(404).json({
				payload: null,
				message: "No se pudo borrar el libro",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: `Success:${idLibro} deleted`,
			payload: { idLibro },
			ok: true,
		});
		return;
	},

	libroUpdateById: async (req, res) => {
		const { id, availableCopies } = req.body;
		console.log(id, availableCopies);

		const librosUpdated = await libroService.serviceUpdateLibro(
			id,
			availableCopies,
		);

		if (!librosUpdated) {
			res.status(404).json({
				payload: null,
				message: "No se pudo actualizar nada",
				ok: false,
			});
			return;
		}

		const newUpdatedLibros = librosUpdated.map((libro) => ({
			title: libro.title,
			newAvailableCopies: libro.availableCopies,
		}));

		res.status(200).json({
			message: `Ticket modificado`,
			payload: newUpdatedLibros,
			ok: true,
		});
		return;
	},
};
