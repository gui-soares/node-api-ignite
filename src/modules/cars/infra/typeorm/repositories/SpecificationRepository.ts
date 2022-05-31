import { Repository } from "typeorm";

import { AppDataSource } from "../../../../../shared/typeorm";
import { ICreateCategoryDTO } from "../../../repositories/dtos";
import { ISpecificationRepository } from "../../../repositories/ISpecificationRepository";
import { Specification } from "../entities/Specification";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = AppDataSource.getRepository(Specification);
    }

    async create(data: ICreateCategoryDTO): Promise<Specification> {
        const specification = this.repository.create(data);

        return this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        return this.repository.findOne({ where: { name } });
    }
}

export { SpecificationRepository };
