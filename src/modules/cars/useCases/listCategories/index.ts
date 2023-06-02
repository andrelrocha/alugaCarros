import categoriesRepository from "../../repositories/CategoriesRepository";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";
import { listCategoriesController } from "./listCategoriesController";

const repository = new categoriesRepository()

const listCategoriesUseCaseVar = new ListCategoriesUseCase(repository)

const listCategories = new listCategoriesController(listCategoriesUseCaseVar)

export { listCategories }