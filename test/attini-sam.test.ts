import { App, Stack } from 'aws-cdk-lib';
import { AttiniSam } from '../src';

test('should create merge step', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniSam = new AttiniSam(stack, 'sam step', {
    project: { path: 'a-path' },
    stackName: 'my-stack',
  });

  expect(attiniSam.toStateJson()).toEqual({
    Type: 'AttiniSam',
    Properties: {
      Project: { Path: 'a-path' },
      StackName: 'my-stack',
    },
    End: true,
  });


});
