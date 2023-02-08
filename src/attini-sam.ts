import { FieldUtils } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';
import { PropsUtil } from './index';

export interface Project {

  /**
   * The path to the SAM App in the Attini project.
   *
   * The Path should always start from the root of the Attini project.
   */
  readonly path: string;

  /**
   * The path and file name of AWS SAM template file.
   *
   * Only needed if Attini did not perform the SAM build and a custom template name was specified with the --template option.
   * For more information, see the {@link https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-build.html AWS SAM CLI build documentation}.
   */
  readonly template?: string;
  /**
   * The path to a directory where the built artifacts are stored.
   *
   * Only needed if Attini did not perform the SAM build and a custom build dir was specified with the --build-dir option.
   * For more information, see the {@link https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-build.html AWS SAM CLI build documentation}.
   */
  readonly buildDir?: string;
}

export interface AttiniSamProps {
  /**
   * SAM project config
   */
  readonly project: Project;
  /**
   * The name that should be given to the stack when deployed. The name must be unique in the Region in which you are creating the stack.
   */
  readonly stackName: string;
  /**
   * Specifies a path to a configuration file for the stack.
   *
   * For more information, see the {@link https://acc.docs.attini.io/api-reference/cloudformation-configuration.html#api-reference-cloudformation-configuration documentation}
   */
  readonly configFile?: string;

  /**
   * The parameters for the stack.
   *
   * For more information, see the {@link https://acc.docs.attini.io/api-reference/cloudformation-configuration.html#api-reference-cloudformation-configuration documentation}
   */
  readonly parameters?: { [key: string]: string };

  /**
   * The tags for the stack
   */
  readonly tags?: { [key: string]: string };
  /**
   * The arn of the StackRole, find more info here: {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-servicerole.html AWS CloudFormation service role}
   */
  readonly stackRoleArn?: string;

  /**
   * The role that should be assumed when the Attini Framework deploys the CloudFormation stack.
   *
   * The ExecutionRole has to trust the following role so that it can be assumed:
   * ```
   arn:aws:iam::{AccountId}:role/attini/attini-action-role-{Region}
   * ```
   */
  readonly executionRoleArn?: string;
  /**
   * Variables that should be passed to any {@link configFile} that is configured.
   * Variables can be referenced in the configuration file and can be used to pass data from the payload to the configuration.
   */
  readonly variables?: { [key: string]: string };

  /**
   * Specify if the stack should be created/updated or deleted.
   *
   */
  readonly action?: Action;

  /**
   * Specify if termination protection should be enabled for the stack.
   *
   * For more information, see the {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html AWS documentation}.
   *
   */
  readonly enableTerminationProtection?: boolean;
}

export enum Action {
  DEPLOY,
  DELETE
}

/**
 * A step for deploying a AWS SAM Project
 */

export class AttiniSam extends AttiniTask {
  type: string = 'AttiniSam';


  constructor(scope: Construct, id: string, private props: AttiniSamProps) {
    super(scope, id);
  }

  protected renderProps(): object {

    let copy: any = { ...this.props };

    if (this.props.action && this.props.action.valueOf() === Action.DEPLOY.valueOf()) {
      copy.action = 'Deploy';
    } else if (this.props.action && this.props.action.valueOf() === Action.DELETE.valueOf()) {
      copy.action = 'Delete';
    }

    return {
      Properties: {
        ...FieldUtils.renderObject(PropsUtil.fixCase(copy)),
        Project: FieldUtils.renderObject(PropsUtil.fixCase(this.props.project)),
      },
    };
  }

}
