const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection.
  // In this case, it is an HTTP server.
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello, world!\n");
    })
    .listen(8000);
  console.log(`Worker ${process.pid} started`);
}
