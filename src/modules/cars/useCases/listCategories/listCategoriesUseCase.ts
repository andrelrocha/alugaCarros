import Category from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    private categoriesRepository
    
    constructor(categoriesRepositoryParams: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepositoryParams
    }

    execute(): Category[] {
        const categories = this.categoriesRepository.listCategoriesCreated()

        return categories
    }
}

export { ListCategoriesUseCase }