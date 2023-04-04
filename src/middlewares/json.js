export async function json(req, res) {
  const buferrs = [];

  for await (const chunck of req) {
    buferrs.push(chunck);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buferrs).toString());
  } catch {
    req.body = null;
  }
  res.setHeader("content-type", "application/json");
}
