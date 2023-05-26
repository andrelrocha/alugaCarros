import { Router, request } from "express";

import categoriesRepository from "../repositories/CategoriesRepository";
import CreateCategoryService from "../services/CreateCategoryService";

//router é um construtor para criar objetos com metódos específicos para requisições http
const categoriesRoutes = Router() 

//uso de repositório para encapsular a lógica de acesso e manipulação de dados relacionada a uma entidade específica do sistema
const repository = new categoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body

    const CreateCategory = new CreateCategoryService(repository)

    CreateCategory.execute({ name, description })

    return response.status(201).send()
})

categoriesRoutes.get("/", (request, response) => {
    const allCategories = repository.listCategoriesCreated()

    return response.json(allCategories)
})

//export default categoriesRoutes -> somente permite uma exportação por módulo, ao invés de várias através do destructuring 
export { categoriesRoutes }