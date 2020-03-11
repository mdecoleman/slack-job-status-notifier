const { getInput } = require("@actions/core");

module.exports.getInputs = () => ({
  channel: getInput("slack_channel", {
    required: true
  }),
  status: getInput("status", { required: true }),
  jobName: getInput("job_name", {
    required: true
  }),
  slackToken: getInput("slack_token", {
    required: true
  })
});
