const { IncomingWebhook } = require("@slack/webhook");

module.exports = async ({ slackToken, channel, blocks }) => {
  const webhook = new IncomingWebhook(slackToken);

  await webhook.send({
    channel,
    blocks
  });
};
