import { BaseController } from "./base.controller.js";

export class UserController extends BaseController {
    async login(
      credentials
    ){
      const response = await this.instance.get(`user/login`, {
        params: new URLSearchParams(credentials)
      });
      // expect(response).toMatchApiSchema();
      return response;
    }
}

export default new UserController()