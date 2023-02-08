import { FieldUtils } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';
import { CfnAction, PropsUtil } from './index';


export interface AttiniCfnProps {

  /**
   * The path to the CloudFormation template. Can either be:
   *
   * 1. A path to a file in the distribution. The path should be from the root of the project and start with a "/".
   * 2. A URL to a public S3 file, starting with "https://".
   * 3. An S3 path, starting with "s3://".
   *
   * Required if it is not specified in {@link configFile}
   */
  readonly template?: string;

  /**
   * The name that should be given to the stack when deployed. The name must be unique in the Region in which you are creating the stack.
   *
   * Required if it is not specified in {@link configFile}
   */
  readonly stackName?: string;

  /**
   * Specifies a path to a configuration file for the stack.
   *
   * For more information, see the {@link https://acc.docs.attini.io/api-reference/cloudformation-configuration.html#api-reference-cloudformation-configuration documentation}
   */
  readonly configFile?: string;

  /**
   * The CloudFormation parameters
   */
  readonly parameters?: {[key: string]: string};

  /**
   * The CloudFormation tags
   */
  readonly tags?: {[key: string]: string};

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
   * The region that the template should be deployed to.
   */
  readonly region?: string;

  /**
   * An optional field name that the CloudFormations output should be placed under in the deployment plan payload.
   */
  readonly outputPath?: string;

  /**
   * Variables that should be passed to any {@link configFile} that is configured.
   * Variables can be referenced in the configuration file and can be used to pass data from the payload to the configuration.
   */
  readonly variables?: {[key: string]: string};

  /**
   * Specify if the stack should be created/updated or deleted.
   *
   */
  readonly action?: CfnAction;

  /**
   * Specify if termination protection should be enabled for the stack.
   *
   * For more information, see the {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html AWS documentation}.
   *
   */
  readonly enableTerminationProtection?: boolean;
}

export class AttiniCfn extends AttiniTask {

  type: string = 'AttiniCfn';


  constructor(scope: Construct, id: string, private props: AttiniCfnProps ) {
    super(scope, id);
  }

  protected renderProps(): object {

    let copy: any = { ...this.props };

    if (this.props.action && this.props.action.valueOf() === CfnAction.DEPLOY.valueOf()) {
      copy.action = 'Deploy';
    } else if (this.props.action && this.props.action.valueOf() === CfnAction.DELETE.valueOf()) {
      copy.action = 'Delete';
    }
    return {
      Properties: FieldUtils.renderObject(PropsUtil.fixCase(copy)),
    };
  }

}
