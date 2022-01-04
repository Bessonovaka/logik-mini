import $api from "../http";
import { IUser } from "../models/IUser";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/users");
  }

  static async postScore(
    email: string,
    score: number
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post("/postscore", { email, score });
  }
}
