import categoriesRepository from "../../repositories/CategoriesRepository";
import CreateCategoryController from "./CreateCategoryController";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

const repository = new categoriesRepository()

const CreateCategoryUseCaseVar = new CreateCategoryUseCase(repository)

const CreateCategory = new CreateCategoryController(CreateCategoryUseCaseVar)

export { CreateCategoryUseCaseVar, CreateCategory }