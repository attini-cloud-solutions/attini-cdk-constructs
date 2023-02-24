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


test('should return output path with no levels', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let anyTaskType = new AttiniCfn(stack, 'MyCfnStack', {
    stackName: 'my-stack',
    template: '/some-path',
  });

  expect(anyTaskType.getOutputPath()).toEqual('$.output.MyCfnStack');

});


test('should return output path with several levels', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let anyTaskType = new AttiniCfn(stack, 'MyCfnStack', {
    stackName: 'my-stack',
    template: '/some-path',
  });

  expect(anyTaskType.getOutputPath('field1', 'field2', 'field3')).toEqual('$.output.MyCfnStack.field1.field2.field3');

});


test('should return output path with several levels and handle concatenation', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let anyTaskType = new AttiniCfn(stack, 'MyCfnStack', {
    stackName: 'my-stack',
    template: '/some-path',
  });

  expect(anyTaskType.getOutputPath('field1', 'field2.field3')).toEqual('$.output.MyCfnStack.field1.field2.field3');

});
