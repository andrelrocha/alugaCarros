import SpecificationsRepository from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";
import { ListSpecificationsController } from "./listSpecificationsController";

const repository = SpecificationsRepository.getInstance()

const ListSpecificationUseCaseVar = new ListSpecificationsUseCase(repository)

const ListSpecification = new ListSpecificationsController(ListSpecificationUseCaseVar)

export { ListSpecification }