const { context } = require("@actions/github");
const { error, setFailed } = require("@actions/core");
const { getInputs } = require("./inputs");
const buildBlocks = require("./buildBlocks");
const moment = require("moment");
const payloads = require("./payloads");
const sendMessage = require("./sendMessage");

async function run() {
  try {
    const { channel, jobName, slackToken, status } = getInputs();

    const actor = context.actor;
    const repository = `${context.repo.owner}/${context.repo.repo}`;
    const repositoryUrl = `https://github.com/${repository}`;
    const ref = context.ref;
    const commit = context.sha;
    const commitUrl = `${repositoryUrl}/commit/${commit}`;
    const runId = process.env.GITHUB_RUN_ID;
    const workflow = context.workflow;
    const workflowUrl = `${repositoryUrl}/actions/runs/${runId}`;
    const timestamp = moment().format("MMMM Do YYYY, h:mm a");
    const { icon } = payloads[status];

    const blocks = buildBlocks({
      actor,
      commit,
      commitUrl,
      icon,
      jobName,
      ref,
      repository,
      repositoryUrl,
      status,
      timestamp,
      workflow,
      workflowUrl
    });

    await sendMessage({ slackToken, blocks, channel });
  } catch (err) {
    error(err);
    setFailed(error.message);
  }
}

run();
