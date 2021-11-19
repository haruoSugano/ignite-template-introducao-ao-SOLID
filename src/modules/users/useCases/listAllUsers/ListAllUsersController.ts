import { Request, Response } from "express";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";


class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const all = this.listAllUsersUseCase.execute({ user_id: String(request.headers.user_id) });
      return response.status(200).json(all);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

  }
}

export { ListAllUsersController };
