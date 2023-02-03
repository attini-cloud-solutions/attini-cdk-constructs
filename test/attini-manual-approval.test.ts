import { App, Stack } from 'aws-cdk-lib';
import { AttiniManualApproval } from '../src';

test('should create merge step', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniMerge = new AttiniManualApproval(stack, 'manualApproval' );
  expect(attiniMerge.toStateJson()).toEqual({
    Type: 'AttiniManualApproval',
    End: true,
  });


});
