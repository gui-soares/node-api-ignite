import { Specification } from "../infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO } from "./dtos";

interface ISpecificationRepository {
    create(data: ICreateSpecificationDTO): Promise<Specification>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository };
