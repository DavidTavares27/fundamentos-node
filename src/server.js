import http from "node:http";

const users = [];

//através do req eu vou ter acesso a todos os dados da requisição/ res: serve para devolver a resposta para quem está chamando o nosso serviço.
const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Jhon Doe",
      email: "jhondoe@example.com",
    });
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
