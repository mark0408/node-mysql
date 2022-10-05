import app from './app.js';
import { sequelize } from "./database/database.js";
import "./models/Users.js";

async function main(){
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    app.listen(5000)
    console.log("server start on port 5000")

}

main();