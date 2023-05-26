import { Router } from "express";

import Category from "../model/Category";

//router é um construtor para criar objetos com metódos específicos para requisições http
const categoriesRoutes = Router()

const categories: Category[] = []

/* ->uso de interface deve ser feito quando não houver métodos adicionais de tipagem
interface Category {
    name: string;
    description: string;
    id: string;
}*/

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body

    const category = new Category(); 
    
    // atribuindo valores às propriedades da instância usando o método Object.assign()
    // Object.assign() copia os valores das propriedades especificadas para a instância category
    Object.assign(category, {
        name,
        description,
        created_at: new Date(),
    })

    categories.push(category)

    return response.status(201).send()
})

//export default categoriesRoutes -> somente permite uma exportação por módulo, ao invés de várias através do destructuring 
export { categoriesRoutes }