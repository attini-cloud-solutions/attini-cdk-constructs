import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AttiniRunner } from '../src';

test('should create runner resource', () => {

  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniRunner = new AttiniRunner(stack, 'my runner', {
    containerName: 'my-container',
    startup: {
      commands: ['echo starting'],
    },
    awsVpcConfiguration: {
      assignPublicIp: true,
      securityGroups: ['test','test2']
    }
  });

  const template = Template.fromStack(stack);
  template.hasResourceProperties('Attini::Deploy::Runner', {
    ContainerName: 'my-container',
    Startup: {
      Commands: ['echo starting'],
    },
    AwsVpcConfiguration: {
      AssignPublicIp: "ENABLED",
      SecurityGroups: 'test,test2',
    }
  });
  expect(attiniRunner.runnerName).toEqual('my runner');

});
