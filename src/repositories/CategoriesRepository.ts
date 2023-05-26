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
    
        
        Object.assign(category, {
        name,
        description,
        created_at: new Date(),
        })

        this.categories.push(category)
    }

    findByName(name: string): Category {
        const categoryNameExistsAlready = this.categories.find(category => category.name === name)
        return categoryNameExistsAlready
    }
    
    listCategoriesCreated(): Category[] {
        return this.categories
    }
}

export default categoriesRepository