import express, { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import RoutesHelper from "./src/helper/routes.helper";

import OrderRoutes from "./src/routes/order.routes";
import UserDataRoutes from "./src/routes/userData.routes";
import AuthenticationRoutes from "./src/routes/user.routes";

class App {
  private app: Express;
  private helper: typeof RoutesHelper;

  constructor() {
    this.app = express();
    this.helper = RoutesHelper;
    this.accessControl();
    this.initializeMiddleware();
    this.initializeRoutes();
    this.startServer();
  }

  private accessControl() {
    this.app.use(cors());
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization,Accept,X-Requested-With,application/json"
      );
      next();
    });
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(this.handleErrors.bind(this));
  }

  private initializeRoutes(): void {
    const routes = [UserDataRoutes]; //authenticated
    //http:localhost:3001/order/get

    const openRoutes: any[] = [AuthenticationRoutes,OrderRoutes]; //open routes

    this.app.get("/", (req: Request, res: Response) => {
      res.json({ message: "App is running" });
    });

    this.helper.initializeRoutes(this.app, true, routes); //authenticated
    this.helper.initializeRoutes(this.app, false, openRoutes); //open routes
  }

  private startServer(): void {
    let port = process.env.PORT || 3001;
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }

  private handleErrors(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  }
}

new App();
