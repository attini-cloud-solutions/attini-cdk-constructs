import { App, Stack } from 'aws-cdk-lib';
import { AttiniMerge } from '../lib';

test('should create merge step', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniMerge = new AttiniMerge(stack, 'merge');
  expect(attiniMerge.toStateJson()).toEqual({
    Type: 'AttiniMergeOutput',
    End: true,
  });


});
