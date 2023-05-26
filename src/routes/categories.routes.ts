import { Router, request } from "express";

import categoriesRepository from "../repositories/CategoriesRepository";

//router é um construtor para criar objetos com metódos específicos para requisições http
const categoriesRoutes = Router() 

//uso de repositório para encapsular a lógica de acesso e manipulação de dados relacionada a uma entidade específica do sistema
const repository = new categoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body

    const categoryExistsAlready = repository.findByName(name)

    if (!categoryExistsAlready) {
        repository.create({ name, description })
        return response.status(201).send()
    } else {
        return response.status(400).json({ error: "Category already exists" })
    }
})

categoriesRoutes.get("/", (request, response) => {
    const allCategories = repository.listCategoriesCreated()

    return response.json(allCategories)
})

//export default categoriesRoutes -> somente permite uma exportação por módulo, ao invés de várias através do destructuring 
export { categoriesRoutes }