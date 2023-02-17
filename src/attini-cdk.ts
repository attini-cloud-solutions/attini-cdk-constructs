import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';
import { PropsUtil } from '../lib';

/**
 * The AttiniCdk step allows you to deploy CDK projects as part of your deployment plan.
 */
export class AttiniCdk extends AttiniTask {

  type: string = 'AttiniCdk';

  constructor(scope: Construct, id: string, private readonly props: AttiniCdkProps) {
    super(scope, id);
    this.props = props;
  }

  protected renderProps(): object {
    let copy: any = { ...this.props };

    if (this.props.stackConfiguration) {
      copy.stackConfiguration = this.props.stackConfiguration?.map(value => PropsUtil.fixCase(value));
    }

    return { Properties: PropsUtil.fixCase(copy) };
  }


}

export interface AttiniCdkProps {

  /**
   * A reference to an {@link AttiniRunner} to use for executing the job.
   * Use {@link AttiniRunner.runnerName} to get a reference.
   *
   * If omitted the Attini default runner will be used.
   */
  readonly runner?: string;
  /**
   * Environment variables that will be set in the shell for the runner job.
   *
   */
  readonly environment?: { [key: string]: string };


  /**
   * The path to the CDK project.
   */
  readonly path: string;

  /**
   * Passed to the CDK --app option.
   */
  readonly app?: string;

  /**
   * Stacks to deploy.
   */
  readonly stacks?: Array<string>;

  /**
   * Passed to the CDK --context option.
   */
  readonly context?: { [key: string]: string };

  /**
   * Passed to the CDK --plugins option
   */
  readonly plugins?: Array<string>;

  /**
   * Passed to the CDK --parameters options.
   */
  readonly stackConfiguration?: Array<StackConfigurationProps>;

  /**
   * Passed to the CDK --build option
   */
  readonly build?: string;

  /**
   * Passed to the CDK --build-exclude option
   */
  readonly buildExclude?: Array<string>;

  /**
   * Passed to the CDK --notification-arns option
   */
  readonly notificationArns?: Array<string>;

  /**
   * Passed to the CDK --force option
   */
  readonly force?: boolean;

  /**
   * Passed to the CDK --role-arn option
   */
  readonly roleArn?: string;

}

export interface StackConfigurationProps {

  /**
   * Stack name that you want to configure.
   */
  readonly stackName?: string;

  /**
   * Parameter configuration for the CloudFormation stack/stacks.
   */
  readonly parameters: { [key: string]: string };
}
