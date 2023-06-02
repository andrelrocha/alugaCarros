import SpecificationsRepository from "../../repositories/implementations/SpecificationsRepository";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const repository = SpecificationsRepository.getInstance()

const CreateSpecificationUseCaseVar = new CreateSpecificationUseCase(repository)

const CreateSpecification = new CreateSpecificationController(CreateSpecificationUseCaseVar)

export { CreateSpecificationUseCaseVar, CreateSpecification }