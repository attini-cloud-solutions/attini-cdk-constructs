import { App, Stack } from 'aws-cdk-lib';
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
