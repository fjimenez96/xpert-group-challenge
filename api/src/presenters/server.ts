import express, { Request, Response, Router } from "express";
import cors from "cors";
import { MainRoutes } from "./routes/main.routes";

export class Server {
  private readonly _port: number;
  private readonly _app: express.Express;
  private _routes: Router;

  constructor(port: number) {
    this._port = port;
    this._routes = MainRoutes.routes;
    this._app = express();
    this._app.use(cors());
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
    this._app.get("/", (req: Request, res: Response) => {
      res.json({ message: "Hello World !!" });
    });
    this._app.use(this._routes);
  }

  async start() {
    this._app.listen(this._port, () => {
      console.log(`Server is running on port ${this._port}`);
    });
  }
}
