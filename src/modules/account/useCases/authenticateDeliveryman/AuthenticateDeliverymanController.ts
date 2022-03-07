import { Request, Response } from "express";

import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateClientUseCase = new AuthenticateDeliverymanUseCase();

    const result = await authenticateClientUseCase.execute({
      username,
      password
    });

    return response.json(result);
  }
}

export { AuthenticateDeliverymanController }