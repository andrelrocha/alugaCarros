import { Request, Response } from 'express' 

import CreateCategoryUseCase from './CreateCategoryUseCase'

//uso de repositório para encapsular a lógica de acesso e manipulação de dados relacionada a uma entidade específica do sistema

class CreateCategoryController {
    
    constructor(private createCategory: CreateCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body

        this.createCategory.execute({ name, description })

        return response.status(201).send()
    }
}

export default CreateCategoryController