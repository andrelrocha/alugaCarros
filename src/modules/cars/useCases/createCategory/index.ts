import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";
import CreateCategoryUseCase from "./CreateCategoryUseCase";
import CreateCategoryController from "./CreateCategoryController";

const repository = CategoriesRepository.getInstance()

const CreateCategoryUseCaseVar = new CreateCategoryUseCase(repository)

const CreateCategory = new CreateCategoryController(CreateCategoryUseCaseVar)

export { CreateCategoryUseCaseVar, CreateCategory }