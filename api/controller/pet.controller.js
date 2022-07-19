import { URLSearchParams } from "url";
import { BaseController } from "./base.controller.js";
const matchApiSchema = require('api-contract-validator').jestPlugin;
const apiDefinitionsPath = './App.yaml';
matchApiSchema({ apiDefinitionsPath });

class PetController extends BaseController {

  async getById(id, token) {
    const response = await this.instance.get(`pet/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    return response;
  }
  async findByStatus(status, token) {
    const response = await this.instance.get(`pet/findByStatus`, {
      params: new URLSearchParams({ status }),
      headers: { Authorization: "Bearer " + token },
    });
    return response;
  }

  async addNew(pet, token) {
    const response = await this.instance.post(`pet/`, pet, {
      headers: { Authorization: "Bearer " + token },
    });
    return response;
  }
  async update(pet, token) {
    const response = await this.instance.put(`pet/`, pet, {
      headers: { Authorization: "Bearer " + token },
    });
    return response;
  }

  async deleteById(id, token) {
    const response = await this.instance.delete(`pet/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    return response;
  }
}

export default new PetController()
