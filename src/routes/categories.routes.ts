import { Router } from "express";

import categoriesRepository from "../repositories/CategoriesRepository";

//router é um construtor para criar objetos com metódos específicos para requisições http
const categoriesRoutes = Router() 

const repository = new categoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body

    repository.create({ name, description })

    return response.status(201).send()
})

//export default categoriesRoutes -> somente permite uma exportação por módulo, ao invés de várias através do destructuring 
export { categoriesRoutes }