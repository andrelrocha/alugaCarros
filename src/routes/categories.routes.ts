import { Router } from "express";

import { CreateCategory } from "../modules/cars/useCases/createCategory";
import { listCategories } from "../modules/cars/useCases/listCategories";


//router é um construtor para criar objetos com metódos específicos para requisições http
const categoriesRoutes = Router() 

categoriesRoutes.post("/", (request, response) => {
    return CreateCategory.handle( request, response )
})

categoriesRoutes.get("/", (request, response) => {
    return listCategories.handle( request, response )
})

//export default categoriesRoutes -> somente permite uma exportação por módulo, ao invés de várias através do destructuring 
export { categoriesRoutes }