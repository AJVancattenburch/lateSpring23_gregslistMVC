import { CarsController } from "./Controllers/CarsController.js";
import { UserController } from "./Controllers/UserController.js";
import { HomesController } from "./Controllers/HomesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  carsController = new CarsController();

  userController = new UserController();

  HomesController = new HomesController();
}

window["app"] = new App();
