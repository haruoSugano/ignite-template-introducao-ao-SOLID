import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }
  execute({ email, name }: IRequest): User {

    let user = this.usersRepository.findByEmail(email);
    if (user !== undefined) {
      throw { status: 400, message: "E-mail already exists."}
    }
    user = this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
