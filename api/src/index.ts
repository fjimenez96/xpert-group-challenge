import { Server } from "./presenters/server";

async function init(){
    const port = process.env.PORT || 8080;
    const server = new Server(+port);
    await server.start();
}

init();