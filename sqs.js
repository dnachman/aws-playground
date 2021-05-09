// Import required AWS SDK clients and commands for Node.js
const { SQSClient, ListQueuesCommand } = require("@aws-sdk/client-sqs");

// Set the AWS Region
const REGION = "us-east-1"; //e.g. "us-east-1"

// Create SQS service object
const sqs = new SQSClient({ region: REGION });

const run = async () => {
  try {
    const data = await sqs.send(new ListQueuesCommand({}));
    console.log("Subscription ARN is " + data.QueueUrls.toString());
  } catch (err) {
    console.error(err, err.stack);
  }
};
run();
