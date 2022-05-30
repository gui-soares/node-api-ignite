import { v4 as uuidV4 } from "uuid";

import { Category } from "../../infra/typeorm/entities/Category";
import { ICreateCategoryDTO } from "../dtos";
import { ICategoryRepository } from "../ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];

    async findByName(name: string): Promise<Category> {
        return this.categories.find((category) => category.name === name);
    }

    async create(data: ICreateCategoryDTO): Promise<Category> {
        const category = new Category();

        Object.assign(category, {
            id: uuidV4(),
            name: data.name,
            description: data.description,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        this.categories.push(category);

        return category;
    }
}

export { CategoryRepositoryInMemory };
