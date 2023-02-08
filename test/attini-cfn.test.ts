import { App, Stack } from 'aws-cdk-lib';
import { AttiniCfn, CfnAction } from '../src';

test('should create a cfn step', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniCfn = new AttiniCfn(stack, 'MyCfnStack', {
    stackName: 'my-stack',
    template: '/some-path',
  });


  expect(attiniCfn.toStateJson()).toEqual({
    Type: 'AttiniCfn',
    Properties: {
      StackName: 'my-stack',
      Template: '/some-path',
    },
    End: true,
  });
});

test('should create a cfn step with action', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniCfn = new AttiniCfn(stack, 'MyCfnStack', {
    stackName: 'my-stack',
    template: '/some-path',
    action: CfnAction.DELETE,
  });


  expect(attiniCfn.toStateJson()).toEqual({
    Type: 'AttiniCfn',
    Properties: {
      StackName: 'my-stack',
      Template: '/some-path',
      Action: 'Delete',
    },
    End: true,
  });
});


test('should create a cfn step with parameters', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniCfn = new AttiniCfn(stack, 'MyCfnStack', {
    stackName: 'my-stack',
    template: '/some-path',
    parameters: { test: 'Test' },
  });

  expect(attiniCfn.toStateJson()).toEqual({
    Type: 'AttiniCfn',
    Properties: {
      StackName: 'my-stack',
      Template: '/some-path',
      Parameters: { test: 'Test' },
    },
    End: true,
  });
});
