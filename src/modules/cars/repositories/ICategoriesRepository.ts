import Category from "../model/Category";

//(Data Transfer Object)
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category
    listCategoriesCreated(): Category[]
    create({ name, description }: ICreateCategoryDTO): void
}

export { ICreateCategoryDTO, ICategoriesRepository }