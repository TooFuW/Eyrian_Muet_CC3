import http from "node:http";
import fs from "node:fs/promises";

const host = "localhost";
const port = 8000;

console.log("NODE_ENV =", process.env.NODE_ENV);

async function requestListener(request, response) {
    response.setHeader("Content-Type", "text/html");
    try {
        const contents = await fs.readFile("index.html", "utf8");
        console.log(request.url.split("/")[1]);
        switch (request.url.split("/")[1]) {
            case "":
            case "index.html":
                response.writeHead(200);
                return response.end(contents);
            case "random.html":
                response.writeHead(200);
                return response.end(`<html><p>${Math.floor(100 * Math.random())}</p></html>`);
            case "random":
                response.writeHead(200);
                console.log(request.url.split("/"));
                console.log(request.url.split("/").pop());
                const nb = parseInt(request.url.split("/").pop());
                let text = "";
                for (let i = 0; i < nb; i++) {
                    text += `<p>${Math.floor(100 * Math.random())}</p>`;
                }
                return response.end(`<html><p>${text}</p></html>`);
            default:
                response.writeHead(404);
                return response.end(`<html><p>404: NOT FOUND</p></html>`);
        }
    } catch (error) {
        console.error(error);
        response.writeHead(500);
        return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});