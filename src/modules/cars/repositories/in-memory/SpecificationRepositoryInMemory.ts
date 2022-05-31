import { v4 as uuidV4 } from "uuid";

import { Specification } from "../../infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO } from "../dtos";
import { ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepositoryInMemory implements ISpecificationRepository {
    specifications: Specification[] = [];

    async findByName(name: string): Promise<Specification> {
        return this.specifications.find(
            (specification) => specification.name === name,
        );
    }

    async create(data: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification, {
            id: uuidV4(),
            name: data.name,
            description: data.description,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        this.specifications.push(specification);

        return specification;
    }
}

export { SpecificationRepositoryInMemory };
