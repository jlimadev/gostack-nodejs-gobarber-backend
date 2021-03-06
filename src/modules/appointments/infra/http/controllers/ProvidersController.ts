import listProvidersService from '@modules/appointments/services/ListProvidersService';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';

class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const listProviders = container.resolve(listProvidersService);

    const appointment = await listProviders.execute({
      user_id,
    });

    return response.json(classToClass(appointment));
  }
}

export default ProvidersController;
