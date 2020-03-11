module.exports = ({
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
}) => [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*<${workflowUrl}|${workflow}>*`
    }
  },
  {
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: `<${repositoryUrl}|${repository}>`
      }
    ]
  },
  {
    type: "section",
    text: { type: "mrkdwn", text: `*ref:* ${ref}` }
  },
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*Commit:* <${commitUrl}|${commit}>`
    }
  },
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `${icon} *${jobName} action ${status}*`
    }
  },
  {
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: `${actor} ${timestamp}`
      }
    ]
  }
];
