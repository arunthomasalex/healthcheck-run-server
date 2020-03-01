let listenToBeakons = port => {
  const server = require("dgram").createSocket("udp4");
  server.on("message", msg => {
    let message = JSON.parse(msg.toString().trim());
    console.log(message);
  });
  server.bind(port, () => console.log("Health check server up."));
};

exports.HealthCheckServer = port => {
  listenToBeakons(port);
};
