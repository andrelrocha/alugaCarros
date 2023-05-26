import categoriesRepository from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/* precisa definir o tipo de retorno, alterar o retorno de erro, acessar o repositório (create)*/
class CreateCategoryService {
    private categoriesRepository
    
    //recebe o parametro enviado quando da criação de new CreateCategoryService()
    constructor(categoriesRepositoryParams: categoriesRepository) {
        this.categoriesRepository = categoriesRepositoryParams
    }
    
    execute({ name, description }: IRequest): void {
        
        const categoryExistsAlready = this.categoriesRepository.findByName(name)

        if (!categoryExistsAlready) {
            this.categoriesRepository.create({ name, description })
        } else {
            throw new Error("Category already exists in our database!")
        }
    }
}

export default CreateCategoryService