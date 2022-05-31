import { Category } from "../infra/typeorm/entities/Category";
import { ICreateCategoryDTO } from "./dtos";

interface ICategoryRepository {
    create(data: ICreateCategoryDTO): Promise<Category>;
    findByName(name: string): Promise<Category>;
    list(): Promise<[Category[], number]>;
}

export { ICategoryRepository };
