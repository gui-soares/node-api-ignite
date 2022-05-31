import { container } from "tsyringe";

import { CategoryRepository } from "../../modules/cars/infra/typeorm/repositories/CategoryRepository";
import { SpecificationRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoryRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository,
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository,
);
