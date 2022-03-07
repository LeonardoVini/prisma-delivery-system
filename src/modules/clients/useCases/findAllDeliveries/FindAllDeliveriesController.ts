import { Request, Response } from "express";
import { FindAllDeviliveriesUseCase } from "./FindAllDeliveriesUseCase";

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const findAllDeviliveriesUseCase = new FindAllDeviliveriesUseCase();

    const { id_client } = request;

    const deliveries = await findAllDeviliveriesUseCase.execute(id_client);

    return response.json(deliveries);
  }
}