import { Router } from "express";

import { CreateSpecification } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router(); 

specificationsRoutes.post("/", (request, response) => {
    return CreateSpecification.handle(request, response)
})

specificationsRoutes.get("/", (request, response) => {
    /*const allSpecifications = repository.listSpecificationsCreated()

    return response.json(allSpecifications)*/
    return null
})


export { specificationsRoutes }