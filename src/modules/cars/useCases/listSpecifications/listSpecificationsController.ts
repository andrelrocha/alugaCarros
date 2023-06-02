import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";


class ListSpecificationsController {
    constructor(private listSpecifications: ListSpecificationsUseCase) {}

    handle(request: Request, response: Response): Response {
        const allSpecifications = this.listSpecifications.execute()

        return response.json(allSpecifications)
    }
}

export { ListSpecificationsController }