import { FieldUtils } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';
import { PropsUtil } from './index';


export interface S3Source {
  /**
   * The S3 Key of the document to import.
   */
  readonly key: string;
  /**
   * The S3 Bucket where the document is located.
   */
  readonly bucket: string;
}

export interface DistributionSource {

  /**
   * The name of the distribution to import
   */
  readonly name: string;
}

export enum SourceType {
  S3_SOURCE = 0,
  DISTRIBUTION_SOURCE = 1

}

export interface AttiniImportProps {

  /**
   * Specifies what kind of source should be used.
   */
  readonly sourceType: SourceType;

  /**
   * Used when the source of the import should be a file on S3. The file must be either a JSON or a YAML document.
   */
  readonly s3Source?: S3Source;

  /**
   * Used when the source of the import should be another distribution deployed in the environment.
   * Before a distribution can import the output of another distribution, it first needs to be declared as a dependency in the attini-configuration file.
   */
  readonly distributionSource?: DistributionSource;


  /**
   * A key/value map where the value is a path to a value in the imported document.
   * The path follows the {@link https://goessner.net/ JSONPath} syntax. The value on the path will be included in the output of the step under the same key name as the mapping.
   */
  readonly mapping?: { [key: string]: string };

  /**
   * The arn of the execution role that should be used for accessing the source. At the moment only needed for the S3 source type if Attini does not have access to the S3 Bucket.
   */
  readonly executionRoleArn?: String;
}

/**
 * The Attini import step can be used for importing data from different sources.
 * A common use case for this type is reading data from the output of another distribution.
 * For example, you could have a distribution responsible for setting up a network that exposes a VPC-id.
 * Then the VPC-id can be imported by other deployment plans.
 */
export class AttiniImport extends AttiniTask {
  type: string = 'AttiniImport';


  constructor(scope: Construct, id: string, private props: AttiniImportProps) {
    super(scope, id);
    if (this.props.sourceType.valueOf() === SourceType.S3_SOURCE.valueOf() && !this.props.s3Source) {
      throw new Error('S3 source is set as type for Attini import step but no S3 source is configured, id =' + id);
    }

    if (this.props.sourceType.valueOf() === SourceType.DISTRIBUTION_SOURCE.valueOf() && !this.props.distributionSource) {
      throw new Error('Distribution source is set as type for Attini import step but no distribution source is configured, id: ' + id);
    }
  }

  protected renderProps(): object {

    let properties: any = {};

    if (this.props.sourceType.valueOf() === SourceType.S3_SOURCE.valueOf()) {
      properties.SourceType = 'S3';
      properties.Source = PropsUtil.fixCase(this.props.s3Source);
    } else {
      properties.SourceType = 'Distribution';
      properties.Source = PropsUtil.fixCase(this.props.distributionSource);
    }

    if (this.props.mapping) {
      properties.Mapping = this.props.mapping;
    }
    if (this.props.executionRoleArn) {
      properties.ExecutionRoleArn = this.props.executionRoleArn;
    }

    return {
      Properties: FieldUtils.renderObject(properties),
    };
  }

}
