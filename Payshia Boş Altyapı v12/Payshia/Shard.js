const { ShardingManager } = require("discord.js");
const Settings = require("./Settings.json");
const shards = new ShardingManager("./Payshia.js", {
  token: Settings.Token,
  totalShards: 8
})
shards.spawn();
