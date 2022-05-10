import { Category } from "../entities/Category";
import { ICreateCategoryDTO } from "./dtos";

interface ICategoryRepository {
    create(data: ICreateCategoryDTO): Promise<Category>;
    findByName(name: string): Promise<Category>;
}

export { ICategoryRepository };
