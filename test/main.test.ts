import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as Main from '../lib/stack/main-stack';

test('SQS DoseAlertQueue Created', () => {
  const app = new cdk.App();
    // WHEN
  const stack = new Main.MainStack(app, 'MainStack');
    // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300
  });
});
