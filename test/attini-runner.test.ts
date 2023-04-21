import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AttiniRunner } from '../src';

test('should create runner resource', () => {

  const mockApp = new App();
  const stack = new Stack(mockApp);
  new AttiniRunner(stack, 'my runner', {
    containerName: 'my-container',
    startup: {
      commands: ['echo starting'],
    },
    awsVpcConfiguration: {
      assignPublicIp: true,
      securityGroups: ['test', 'test2'],
    },
  });

  const template = Template.fromStack(stack);
  template.hasResourceProperties('Attini::Deploy::Runner', {
    ContainerName: 'my-container',
    Startup: {
      Commands: ['echo starting'],
    },
    AwsVpcConfiguration: {
      AssignPublicIp: 'ENABLED',
      SecurityGroups: 'test,test2',
    },
  });

});

test('should create runner resource with ec2 configuration', () => {

  const mockApp = new App();
  const stack = new Stack(mockApp);
  new AttiniRunner(stack, 'my runner', {
    containerName: 'my-container',
    startup: {
      commands: ['echo starting'],
    },
    awsVpcConfiguration: {
      assignPublicIp: true,
      securityGroups: ['test', 'test2'],
    },
    ec2Configuration: {
      instanceType: 'm5.large',
      instanceProfileName: 'some-name',
      ami: 'AmazonLinux2',
    },
  });

  const template = Template.fromStack(stack);
  template.hasResourceProperties('Attini::Deploy::Runner', {
    ContainerName: 'my-container',
    Startup: {
      Commands: ['echo starting'],
    },
    AwsVpcConfiguration: {
      AssignPublicIp: 'ENABLED',
      SecurityGroups: 'test,test2',
    },
    Ec2Configuration: {
      InstanceType: 'm5.large',
      InstanceProfileName: 'some-name',
      Ami: 'AmazonLinux2',
    },
  });

});
