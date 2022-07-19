import petController from "../api/controller/pet.controller.js";
import userController from "../api/controller/user.controller.js";
const matchApiSchema = require('api-contract-validator').jestPlugin;
const apiDefinitionsPath = './App.yaml';
matchApiSchema({ apiDefinitionsPath });


describe("User can", () => {

  it("login", async () => {
    const response = await userController.login({
      username: "user",
      password: "user",
    });
    // expect(response).toMatchApiSchema();
    expect(response.data.message).toContain("logged in user session");
  });

  it("receive pet by his id", async () => {
    const response = await petController.getById(20);
    expect(response).toMatchApiSchema();
    expect(response.data.id).toBe(20);
  });

  it("find pets by pending status", async () => {
    const response = await petController.findByStatus("pending");
    expect(response).toMatchApiSchema();

    response.data.every((pet) => {
      expect(pet.status).toBe("pending");
    });
  });
});
