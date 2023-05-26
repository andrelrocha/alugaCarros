import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';

//router é um construtor para criar objetos com metódos específicos para requisições http
const categoriesRoutes = Router()

const categories = []

interface Category {
    name: string;
    description: string;
    id: string;
  }

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body

    const category: Category = {
        name,
        description,
        id: uuidv4(),
    }

    categories.push(category)

    return response.status(201).send()
})

//export default categoriesRoutes -> somente permite uma exportação por módulo, ao invés de várias através do destructuring 
export { categoriesRoutes }