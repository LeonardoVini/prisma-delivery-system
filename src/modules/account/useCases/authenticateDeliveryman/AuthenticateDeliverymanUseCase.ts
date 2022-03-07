import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface IRequest {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IRequest): Promise<string> {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      }
    });

    if (!deliveryman) {
      throw new Error('Username or password invalid');
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid');
    }

    const token = sign({ username }, 'deliver-project-secret', {
      subject: deliveryman.id,
      expiresIn: '1d',
    })

    return token;
  }
}

export { AuthenticateDeliverymanUseCase }