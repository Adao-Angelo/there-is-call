import { get_user_location } from "../../../../utils/get_user_location";
import { I_location, I_user } from "../../model/user";
import { User_repository } from "../../repositories/user_repository";

class Create_user_use_case {
  constructor(private user_repository: User_repository) {}
  async execute(user: I_user, Location: I_location) {
    const location = await get_user_location(Location);

    const result = await this.user_repository.create_user({
      name: user.name,
      email: user.email,
      password: user.password,
      status: user.status,
      contact: user.contact,
      type_account: user.type_account,
      location: location,
    });
  }
}
export { Create_user_use_case };
