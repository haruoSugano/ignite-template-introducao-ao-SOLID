import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {

    const users = this.usersRepository.list();

    const userExists = this.usersRepository.findById(user_id);
    if (!userExists) {
      throw new Error("Error");
    }

    const admin = users.find(user => user.admin === true && user.id === userExists.id);
    if (!admin) {
      throw new Error("Error");
    }
    
    return users;
  }
}

export { ListAllUsersUseCase };
