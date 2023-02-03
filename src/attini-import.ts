import { FieldUtils } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';
import { PropsUtil } from './index';


export interface S3Source {
  readonly key: string;
  readonly bucket: string;
}

export interface DistributionSource {
  readonly name: string;
}

export enum SourceType {
  S3_SOURCE = 0,
  DISTRIBUTION_SOURCE = 1

}

export interface AttiniImportProps {
  readonly sourceType: SourceType;
  readonly s3Source?: S3Source;
  readonly distributionSource?: DistributionSource;
  readonly mapping?: { [key: string]: string };
  readonly executionRoleArn?: String;
}

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

    if (properties.Mapping) {
      properties.Mapping = this.props.mapping;

    }
    if (properties.ExecutionRoleArn) {
      properties.ExecutionRoleArn = this.props.executionRoleArn;

    }

    return {
      Properties: FieldUtils.renderObject(properties),
    };
  }

}
