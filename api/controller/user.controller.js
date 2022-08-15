import { BaseController } from "./base.controller.js";

class UserController extends BaseController {
    async login(
      credentials
    ){
      const response = await this.instance.get(`user/login`, {
        params: new URLSearchParams(credentials)
      });
      return response;
    }
}

export default new UserController()