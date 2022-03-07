import { prisma } from "../../../../database/prismaClient";

interface IRequest {
  id_delivery: string;
  id_deliveryman: string;
}

class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IRequest) {
    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery
      },
      data: {
        id_deliveryman
      }
    })

    return result;
  }
}

export { UpdateDeliverymanUseCase }