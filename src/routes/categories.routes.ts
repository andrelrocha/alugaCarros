import { Router } from "express";

import categoriesRepository from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategory } from "../modules/cars/useCases/createCategory";

//router é um construtor para criar objetos com metódos específicos para requisições http
const categoriesRoutes = Router() 
const repository = new categoriesRepository()

categoriesRoutes.post("/", (request, response) => {
    return CreateCategory.handle( request, response )
})

categoriesRoutes.get("/", (request, response) => {
    const allCategories = repository.listCategoriesCreated()

    return response.json(allCategories)
})

//export default categoriesRoutes -> somente permite uma exportação por módulo, ao invés de várias através do destructuring 
export { categoriesRoutes }