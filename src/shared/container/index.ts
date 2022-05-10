import { container } from "tsyringe";

import { CategoryRepository } from "../../modules/cars/infra/typeorm/repositories/CategoryRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoryRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository,
);
