import "dotenv/config";
import "reflect-metadata";
import {DataSource} from "typeorm";
import databaseConfig from "../config/database.config";

export class DatabaseConnection {
  private static _connection: DataSource;

  public static async connect(): Promise<void> {
    {
      if (!this._connection?.isInitialized) {
        this._connection = await databaseConfig.initialize();
        console.log("O banco de dados agora está conectado");
      }
    }
  }

  public static get connection() {
    if (!this._connection) {
      throw new Error("O banco de dados agora está conectado");
    }

    return this._connection;
  }
}
