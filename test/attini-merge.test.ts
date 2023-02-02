import { App, Stack } from 'aws-cdk-lib';
import { AttiniMerge } from '../lib';

test('should create merge step', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniRunnerJob = new AttiniMerge(stack, 'merge');
  expect(attiniRunnerJob.toStateJson()).toEqual({
    Type: 'AttiniMerge',
    End: true,
  });


});
