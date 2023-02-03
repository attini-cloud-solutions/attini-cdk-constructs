import { App, Stack } from 'aws-cdk-lib';
import { JsonPath } from 'aws-cdk-lib/aws-stepfunctions';
import { AttiniImport, SourceType } from '../src';

test('should create import step', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniImport = new AttiniImport(stack, 'import', {
    sourceType: SourceType.DISTRIBUTION_SOURCE,
    distributionSource: { name: 'test' },
  });

  expect(attiniImport.toStateJson()).toEqual({
    Type: 'AttiniImport',
    Properties: {
      SourceType: 'Distribution',
      Source: { Name: 'test' },
    },
    End: true,
  });

});

test('should handle json path', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniImport = new AttiniImport(stack, 'import', {
    sourceType: SourceType.DISTRIBUTION_SOURCE,
    distributionSource: { name: JsonPath.stringAt('$.test') },
  });

  expect(attiniImport.toStateJson()).toEqual({
    Type: 'AttiniImport',
    Properties: {
      SourceType: 'Distribution',
      Source: { 'Name.$': '$.test' },
    },
    End: true,
  });

});
