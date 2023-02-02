import { Construct } from 'constructs';
import { AttiniState } from './attini-state';
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

export class AttiniSam extends AttiniState {
  type: string = 'AttiniSam';


  constructor(scope: Construct, id: string, private props: AttiniSamProps) {
    super(scope, id);
  }

  protected renderProps(): object {

    return {
      Properties: {
        ...PropsUtil.fixCase(this.props),
        Project: PropsUtil.fixCase(this.props.project),
      },
    };
  }

}
