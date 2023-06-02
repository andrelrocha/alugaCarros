import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    private specificationsRepository
    
    constructor(specificationsRepositoryParams: ISpecificationsRepository) {
        this.specificationsRepository = specificationsRepositoryParams
    }
    
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name)
        
        if (!specificationAlreadyExists) {
            this.specificationsRepository.create({ name, description })
        } else {
            throw new Error("Specification already exists")
        }
    }
}

export default CreateSpecificationUseCase