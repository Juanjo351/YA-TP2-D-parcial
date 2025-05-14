import { Router } from "express";
import { libroController } from "../controllers/libro.controller.js";

const libroRouter = Router();

libroRouter.get("/json_file", libroController.leerArchivo);
libroRouter.get("/data_externa", libroController.escribirData);

libroRouter.get("/libro-valido/:id", libroController.libroValidacion);
/* libroRouter.post("/ticket", libroController.ticketCreateOne);
libroRouter.delete("/ticket/:id", libroController.ticketDeleteOne);
libroRouter.put("/update-exp-date", libroController.ticketUpdateByUserCode);  */

export { libroRouter };
