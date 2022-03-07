import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token not provided"
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, 'deliver-project-secret') as IPayload;

    request.id_client = sub;

    next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token"
    });
  }
}

export { ensureAuthenticateClient };