import axios from "axios";

export class BaseController {
       instance = axios.create({
        baseURL: "https://petstore.swagger.io/v2/",
        timeout: 1000,
        headers: { "X-Custom-Header": "foobar" }, // add here static headers
      });

}