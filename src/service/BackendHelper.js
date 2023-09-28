import { APIClient } from "./Network";
import * as url from "./Urls";

const api = new APIClient();

export const postLogin = data => api.create(url.AUTH_LOGIN_CREATE, data);
export const postRegister = data => api.create(url.AUTH_REGISTER_CREATE, data);

