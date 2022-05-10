import { AppError } from "../../../../shared/infra/http/errors/AppError";
import { CategoryRepositoryInMemory } from "../../in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Create Category", () => {
    beforeEach(async () => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(
            categoryRepositoryInMemory,
        );
    });

    it("Should be able to create a new category for the given data", async () => {
        const data = {
            name: "Popular",
            description: "Carros simples e com preços mais atrativos",
        };

        const category = await createCategoryUseCase.execute(data);

        expect(category).toHaveProperty("id");
        expect(category.name).toBe(data.name);
    });

    it("Should not be able to create a new category if the given data already exists", () => {
        expect(async () => {
            const data = {
                name: "Popular",
                description: "Carros simples e com preços mais atrativos",
            };

            await createCategoryUseCase.execute(data);
            await createCategoryUseCase.execute(data);
        }).rejects.toBeInstanceOf(AppError);
    });
});
