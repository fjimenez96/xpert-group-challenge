import mongoose from "mongoose";

export class MongoDB {
  static async connect(mongoUrl: string, dbName: string):Promise<void> {
    await mongoose.connect(mongoUrl, {
      dbName,
    });
  }
}
