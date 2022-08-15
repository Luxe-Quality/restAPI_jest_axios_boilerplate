import petController from "../api/controller/pet.controller.js";
import userController from "../api/controller/user.controller.js";
import petBuilder from "../api/data_builder/pet.builder.js";
const matchApiSchema = require('api-contract-validator').jestPlugin;
const apiDefinitionsPath = './swagger.yaml';
matchApiSchema({ apiDefinitionsPath });

describe("User can", () => {

  it("login", async () => {
    // const response = await userController.login({
    //   username: "user",
    //   password: "user",
    // });

    // expect(response.data.message).toContain("logged in user session");
  });

  it("receive pet by his id", async () => {
    // const response = await petController.getById(5);
    // expect(response).toMatchApiSchema();
    // expect(response.data.id).toBe(5);
  });

  it("find pets by pending status", async () => {
    // const response = await petController.findByStatus("pending");
    // expect(response).toMatchApiSchema();

    // response.data.every((pet) => {
    //   expect(pet.status).toBe("pending");
    // });
  });

  it("add a new pet to the store", async () => {
    const data = petBuilder.getPet("Jon Doe","Gadzilla","lorum","ipsum","available")
    const response = await petController.addNew(data);

    expect(response).toMatchApiSchema();
    expect(response.data.status).toBe("available");
    expect(response.data.name).toBe("Gadzilla");
  });
  
});
