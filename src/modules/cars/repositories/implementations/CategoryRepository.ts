import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { Category } from "../../entities/Category";
import { ICreateCategoryDTO } from "../dtos";
import { ICategoryRepository } from "../ICategoryRepository";

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
