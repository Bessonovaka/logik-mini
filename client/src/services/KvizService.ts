import $api from "../http";
import { IKviz } from "../models/IKviz";
import { AxiosResponse } from "axios";

export default class UserService {
  static fetchKvizs(): Promise<AxiosResponse<IKviz[]>> {
    return $api.get<IKviz[]>("/kvizs");
  }
}
