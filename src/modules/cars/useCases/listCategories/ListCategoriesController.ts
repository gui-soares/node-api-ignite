import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoryUseCase = container.resolve(ListCategoryUseCase);

        const result = await listCategoryUseCase.execute();

        return res.status(200).json(result);
    }
}

export { ListCategoriesController };
