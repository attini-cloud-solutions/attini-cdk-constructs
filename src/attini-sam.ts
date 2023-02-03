import { FieldUtils } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';
import { PropsUtil } from './index';

export interface Project {
  readonly path: string;
  readonly template?: string;
  readonly buildDir?: string;
}

export interface AttiniSamProps {
  readonly project: Project;
  readonly stackName: string;
  readonly configFile?: string;
  readonly parameters?: { [key: string]: string };
  readonly tags?: { [key: string]: string };
  readonly stackRoleArn?: string;
  readonly executionRoleArn?: string;
  readonly variables?: { [key: string]: string };
  readonly action?: string;
  readonly enableTerminationProtection?: boolean;
}

export class AttiniSam extends AttiniTask {
  type: string = 'AttiniSam';


  constructor(scope: Construct, id: string, private props: AttiniSamProps) {
    super(scope, id);
  }

  protected renderProps(): object {

    return {
      Properties: {
        ...FieldUtils.renderObject(PropsUtil.fixCase(this.props)),
        Project: FieldUtils.renderObject(PropsUtil.fixCase(this.props.project)),
      },
    };
  }

}
