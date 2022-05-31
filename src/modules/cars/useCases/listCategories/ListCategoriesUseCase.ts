import { inject, injectable } from "tsyringe";

import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IResponse {
    categories: Category[];
    total: number;
}

@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository,
    ) {}

    async execute(): Promise<IResponse> {
        const [categories, total] = await this.categoryRepository.list();

        return { categories, total };
    }
}

export { ListCategoryUseCase };
