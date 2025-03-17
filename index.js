import { startServer } from "./server.js";
import { initMongo } from "./src/db/initMongo.js";



const bootstrap = async () => {
    await initMongo();
    startServer();
}

bootstrap();