import { Request, Response } from "express";
import { listCategoriesUseCase } from "./listCategoriesUseCase";

class listCategoriesController {
    constructor(private listCategories: listCategoriesUseCase) {}
    
    handle(request: Request, response: Response): Response {
        const allCategories = this.listCategories.execute()

        return response.json(allCategories)
    }
}

export { listCategoriesController }