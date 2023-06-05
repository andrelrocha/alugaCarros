import { Router } from "express";
import multer from "multer";

import { CreateCategory } from "../modules/cars/useCases/createCategory";
import { listCategories } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";


//router é um construtor para criar objetos com metódos específicos para requisições http
const categoriesRoutes = Router() 

const upload = multer({
    dest: "./tmp",
})

categoriesRoutes.post("/", (request, response) => {
    return CreateCategory.handle( request, response )
})

categoriesRoutes.get("/", (request, response) => {
    return listCategories.handle( request, response )
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle( request, response )
})

//export default categoriesRoutes -> somente permite uma exportação por módulo, ao invés de várias através do destructuring 
export { categoriesRoutes }