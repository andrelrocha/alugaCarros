import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class listCategoriesController {
    constructor(private listCategories: ListCategoriesUseCase) {}
    
    handle(request: Request, response: Response): Response {
        const allCategories = this.listCategories.execute()

        return response.json(allCategories)
    }
}

export { listCategoriesController }