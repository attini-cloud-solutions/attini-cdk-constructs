import { App, Stack } from 'aws-cdk-lib';
import { JsonPath } from 'aws-cdk-lib/aws-stepfunctions';
import { AttiniImport, SourceType } from '../src';

test('should create import step', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniImport = new AttiniImport(stack, 'import', {
    sourceType: SourceType.DISTRIBUTION_SOURCE,
    distributionSource: { name: 'test' },
    executionRoleArn: 'test-arn',
    mapping: {
      someMapping: JsonPath.stringAt('$.test'),
    },
  });

  expect(attiniImport.toStateJson()).toEqual({
    Type: 'AttiniImport',
    Properties: {
      ExecutionRoleArn: 'test-arn',
      SourceType: 'Distribution',
      Source: { Name: 'test' },
      Mapping: { 'someMapping.$': '$.test' },
    },
    End: true,
  });

});


test('should handle S3 source', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let attiniImport = new AttiniImport(stack, 'import', {
    sourceType: SourceType.S3_SOURCE,
    s3Source: {
      key: 'test',
      bucket: 'my-test-bucket',
    },
  });

  expect(attiniImport.toStateJson()).toEqual({
    Type: 'AttiniImport',
    Properties: {
      SourceType: 'S3',
      Source: {
        Key: 'test',
        Bucket: 'my-test-bucket',
      },
    },
    End: true,
  });

});

test('should throw exception if s3 source config is missing', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  const test = () => {
    new AttiniImport(stack, 'import', {
      sourceType: SourceType.S3_SOURCE,
      distributionSource: { name: 'test' },
    });
  };
  expect(test).toThrowError();

});


test('should throw exception if distribution source config is missing', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);

  const test = () => {
    new AttiniImport(stack, 'import', {
      sourceType: SourceType.DISTRIBUTION_SOURCE,
      s3Source: {
        key: 'test',
        bucket: 'my-test-bucket',
      },
    });
  };
  expect(test).toThrowError();

});

