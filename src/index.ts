import type { Request } from "express";
import type { WebSocket } from "ws";

export default function (ws: WebSocket, req: Request) {
  ws.on("message", (message: string) => {
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });
}
