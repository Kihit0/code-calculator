import { Controller } from "./_assets/ts/controller/controller";
import "./_assets/scss/index.scss";

function initApp(): void {
  const controller: Controller = new Controller();
  controller.run();
}
document.addEventListener("DOMContentLoaded", initApp);
