import { APIClient } from "./Network";
import * as url from "./Urls";

const api = new APIClient();

export const postLogin = data => api.create(url.AUTH_LOGIN_CREATE, data);
export const postRegister = data => api.create(url.AUTH_REGISTER_CREATE, data);
export const createJob = data => api.create(url.JOBS_CREATE_JOB, data);
export const getAllJobs = data => api.get(url.JOBS_GET_ALL_JOBS, data);
export const getCurrentUser = data => api.get(url.AUTH_USER_READ, data);
export const postResetPassword = data => api.create(url.AUTH_PASSWORD_RESET_CREATE, data);
