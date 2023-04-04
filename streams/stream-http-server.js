import http from "node:http";
import { Transform } from "node:stream";

class InverseNumberStream extends Transform {
  _transform(chunck, encoding, callback) {
    const transformed = Number(chunck.toString() * -1);

    console.log(transformed);
    callback(null, Buffer.from(String(transformed)));
  }
}
//Tudo no Node são streams, toda porta de entrada/saída são stremas
//req => Readable Stream
//res => Writable Stream

const server = http.createServer(async (req, res) => {
  const buferrs = [];
  for await (const chunck of req) {
    buferrs.push(chunck);
  }

  const fullStreamContent = Buffer.concat(buferrs).toLocaleString();

  console.log(fullStreamContent);

  return res.end(fullStreamContent);
});

server.listen(3334);
