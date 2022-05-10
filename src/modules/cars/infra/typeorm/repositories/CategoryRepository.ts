import { Repository } from "typeorm";

import { AppDataSource } from "../../../../../shared/typeorm";
import { ICreateCategoryDTO } from "../../../repositories/dtos";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { Category } from "../entities/Category";

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = AppDataSource.getRepository(Category);
    }

    async create(data: ICreateCategoryDTO): Promise<Category> {
        const newCategory = this.repository.create(data);

        return this.repository.save(newCategory);
    }

    async findByName(name: string): Promise<Category> {
        return this.repository.findOne({ where: { name } });
    }
}

export { CategoryRepository };
