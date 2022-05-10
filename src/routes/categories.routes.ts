import { Router } from "express";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

export { categoriesRoutes };
