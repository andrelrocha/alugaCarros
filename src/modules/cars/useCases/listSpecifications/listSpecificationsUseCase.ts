import Specification from "../../model/Specification"
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"


class ListSpecificationsUseCase { 
    private specificationsRepository
    
    constructor(specificationsRepositoryParams: ISpecificationsRepository) {
        this.specificationsRepository = specificationsRepositoryParams
    }

    execute(): Specification[] {
        const specifications = this.specificationsRepository.listSpecificationsCreated()

        return specifications
    }
}

export { ListSpecificationsUseCase }