import axios from "axios";
import { LoginResponse } from "../../types/auth/auth.type";
import config from "../../config/config.json";
import { LoginParam } from "./auth.param";

// class AuthRepository {
//   public async login({ code }: LoginParam): Promise<LoginResponse> {
//     const { accessToken } = await axios.post(`${config.server}`, { code });
//     return accessToken;
//   }
// }

// export default new AuthRepository();
