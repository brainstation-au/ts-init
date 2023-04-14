import * as cdk from 'aws-cdk-lib';
import { MyStack } from '.';

const app = new cdk.App();

new MyStack(app, 'MyStack', {
  description: 'My Stack',
  env: { region: 'ap-southeast-2'},
  stackName: 'my-stack',
  terminationProtection: false,
  tags: {
    'system-id': 'my-stack',
  }
});
