import { App, Stack } from 'aws-cdk-lib';
import { AttiniRunnerJob } from '../src/attini-runner-job';

test('should create Runner job step with Runner', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniRunnerJob = new AttiniRunnerJob(stack, 'Keep running', {
    runner: 'RunnerName',
    commands: ['echo hello!'],
  });
  expect(attiniRunnerJob.toStateJson()).toEqual({
    Type: 'AttiniRunnerJob',
    Properties: {
      Commands: ['echo hello!'],
      Runner: 'RunnerName',
    },
    End: true,
  });


});

test('should create Runner job step without Runner', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniRunnerJob = new AttiniRunnerJob(stack, 'Keep running', {
    commands: ['echo hello!'],
  });
  expect(attiniRunnerJob.toStateJson()).toEqual({
    Type: 'AttiniRunnerJob',
    Properties: {
      Commands: ['echo hello!'],
    },
    End: true,
  });


});
