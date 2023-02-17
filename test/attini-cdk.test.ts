import { App, Stack } from 'aws-cdk-lib';
import { AttiniCdk } from '../src';

test('should create CDK step with Runner', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniRunnerJob = new AttiniCdk(stack, 'Keep running', {
    runner: 'RunnerName',
    path: 'my-path',
  });
  expect(attiniRunnerJob.toStateJson()).toEqual({
    Type: 'AttiniCdk',
    Properties: {
      Path: 'my-path',
      Runner: 'RunnerName',
    },
    End: true,
  });


});

test('should create CDK step with Build commands', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniRunnerJob = new AttiniCdk(stack, 'Keep running', {
    buildCommands: 'npm install',
    path: 'my-path',
  });
  expect(attiniRunnerJob.toStateJson()).toEqual({
    Type: 'AttiniCdk',
    Properties: {
      Path: 'my-path',
      Build: 'npm install',
    },
    End: true,
  });


});

test('should create CDK step with stack config', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniRunnerJob = new AttiniCdk(stack, 'Keep running', {
    stackConfiguration: [
      {
        stackName: 'my-stack',
        parameters: { stackParam: 'param-value' },
      },
      {
        parameters: { stackParam2: 'param-value2' },
      },
    ],
    path: 'my-path',
  });
  expect(attiniRunnerJob.toStateJson()).toEqual({
    Type: 'AttiniCdk',
    Properties: {
      Path: 'my-path',
      StackConfiguration: [
        {
          StackName: 'my-stack',
          Parameters: { stackParam: 'param-value' },
        },
        {
          Parameters: { stackParam2: 'param-value2' },
        },
      ],
    },
    End: true,
  });


});

