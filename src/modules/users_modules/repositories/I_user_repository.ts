import { I_user } from "../model/user";

interface I_user_repository {
  list_users(): Promise<I_user[]>;
  create_user(user: I_user): Promise<void>;
}

export { I_user, I_user_repository };
