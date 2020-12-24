const Event = Load => require(`./Events/${Load}`);
module.exports = client => {
  client.on("message", Event("Message"));
};