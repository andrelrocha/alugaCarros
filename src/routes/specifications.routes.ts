import { Router } from "express";

import { CreateSpecification } from "../modules/cars/useCases/createSpecification";
import { ListSpecification } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router(); 

specificationsRoutes.post("/", (request, response) => {
    return CreateSpecification.handle(request, response)
})

specificationsRoutes.get("/", (request, response) => {
    return ListSpecification.handle(request, response)
})


export { specificationsRoutes }