import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/infra/http/errors/AppError";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICreateCategoryDTO } from "../../repositories/dtos";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

type IRequest = ICreateCategoryDTO;

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository,
    ) {}

    async execute({ name, description }: IRequest): Promise<Category> {
        const findedCategory = await this.categoryRepository.findByName(name);

        if (findedCategory) {
            throw new AppError("Category already exists", 400);
        }

        const category = await this.categoryRepository.create({
            name,
            description,
        });

        return category;
    }
}

export { CreateCategoryUseCase };
