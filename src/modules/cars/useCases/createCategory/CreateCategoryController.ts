import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { body } = req;

        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

        const category = await createCategoryUseCase.execute(body);

        return res.status(201).json(category);
    }
}

export { CreateCategoryController };
