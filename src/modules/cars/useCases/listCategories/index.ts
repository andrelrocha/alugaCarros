import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";
import { listCategoriesController } from "./listCategoriesController";

const repository = CategoriesRepository.getInstance()

const listCategoriesUseCaseVar = new ListCategoriesUseCase(repository)

const listCategories = new listCategoriesController(listCategoriesUseCaseVar)

export { listCategories }