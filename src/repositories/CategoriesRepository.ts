import Category from "../model/Category"

//(Data Transfer Object)
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class categoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    create({ name, description }: ICreateCategoryDTO) {
        const category = new Category(); 
    
        // atribuindo valores às propriedades da instância 
        Object.assign(category, {
        name,
        description,
        created_at: new Date(),
        })

        this.categories.push(category)
    }

    listCategoriesCreated(): Category[] {
        return this.categories
    }
}

export default categoriesRepository