import { App, Stack } from 'aws-cdk-lib';
import { AttiniCfn } from '../src';

test('should return output path root', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let anyTaskType = new AttiniCfn(stack, 'MyCfnStack', {
    stackName: 'my-stack',
    template: '/some-path',
  });

  expect(anyTaskType.getOutputPath()).toEqual('$.output.MyCfnStack');

});


test('should return output path', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let anyTaskType = new AttiniCfn(stack, 'MyCfnStack', {
    stackName: 'my-stack',
    template: '/some-path',
  });

  expect(anyTaskType.getOutputPath('my-field')).toEqual('$.output.MyCfnStack.my-field');

});
