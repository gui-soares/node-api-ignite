import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let listCategoriesUseCase: ListCategoryUseCase;

describe("List Categories", () => {
    beforeEach(async () => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();

        listCategoriesUseCase = new ListCategoryUseCase(
            categoryRepositoryInMemory,
        );
    });

    it("Should be able to list all categories", async () => {
        const category1 = {
            name: "Popular",
            description: "Carros simples e com preços mais atrativos",
        };

        const category2 = {
            name: "Esportivo",
            description: "Carros velozes e com preços mais altos",
        };

        await categoryRepositoryInMemory.create(category1);
        await categoryRepositoryInMemory.create(category2);

        const result = await listCategoriesUseCase.execute();

        expect(result.categories).toBe(categoryRepositoryInMemory.categories);
        expect(result.total).toBeGreaterThan(0);
    });
});
