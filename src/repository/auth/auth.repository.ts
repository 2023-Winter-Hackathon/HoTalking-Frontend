import axios from "axios";
import { LoginResponse } from "../../types/auth/auth.type";
import config from "../../config/config.json";
import { LoginParam } from "./auth.param";

class AuthRepository {
  public async login({ code }: LoginParam): Promise<LoginResponse> {
    const { data } = await axios.post(`${config.server}/auth/login/dauth`, {
      code,
    });

    return data;
  }
}

export default new AuthRepository();
