import { prisma } from "../../../../database/prismaClient";

interface IRequest {
  item_name: string;
  id_client: string;
}

class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: IRequest) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      }
    })

    return delivery;
  }
}

export { CreateDeliveryUseCase }