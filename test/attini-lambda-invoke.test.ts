import { App, Stack } from 'aws-cdk-lib';
import { AttiniLambdaInvoke } from '../src';

test('should create lambda invoke', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let lambdaInvoke = new AttiniLambdaInvoke(stack, 'invoke lambda', { functionName: 'test' });

  expect(lambdaInvoke.toStateJson()).toEqual({
    Type: 'AttiniLambdaInvoke',
    Parameters: { FunctionName: 'test' },
    End: true,
  });


});
