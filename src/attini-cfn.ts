import { FieldUtils } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';
import { PropsUtil } from './index';


export interface AttiniCfnProps {
  readonly template: string;
  readonly stackName: string;
  readonly configFile?: string;
  readonly parameters?: {[key: string]: string};
  readonly tags?: {[key: string]: string};
  readonly stackRoleArn?: string;
  readonly executionRoleArn?: string;
  readonly region?: string;
  readonly outputPath?: string;
  readonly variables?: {[key: string]: string};
  readonly action?: string;
  readonly enableTerminationProtection?: boolean;
}
export class AttiniCfn extends AttiniTask {

  type: string = 'AttiniCfn';


  constructor(scope: Construct, id: string, private props: AttiniCfnProps ) {
    super(scope, id);
  }

  protected renderProps(): object {
    return {
      Properties: FieldUtils.renderObject(PropsUtil.fixCase(this.props)),
    };
  }

}
