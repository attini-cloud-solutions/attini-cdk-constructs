import { CfnResource } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PropsUtil } from './index';

export interface AttiniRunnerProps {

  /**
   * Fargate ECS task definition that the Attini Runner should use.
   *
   * If omitted the Attini will use its default task definition
   */
  readonly taskDefinitionArn?: string;

  /**
   * The name of the container in the task definition. This is only required if a task definition with multiple containers is specified.
   *
   */
  readonly containerName?: string;

  /**
   * The name of the ECS Cluster to use. This is not mandatory if there is a default cluster in the account.
   */
  readonly ecsCluster?: string;
  /**
   *
   * The IAM Role the Runner should use.
   *
   * This IAM Role will override the IAM Role from the TaskDefinition.
   *
   * This IAM Role requires a basic execution policy that allows the runner to communicate with the deployment plan.
   * Add the following execution policy to the IAM Role:
   * ```
   arn:aws:iam::${AccountId}:policy/attini-runner-basic-execution-policy-${Region}
   * ```
   *
   */
  readonly roleArn?: string;
  /**
   * A Container image that the runner should use. If you configure this value, Attini will configure a TaskDefinition for you.
   *
   * This configuration can not be combined with the {@link taskDefinitionArn} configuration.
   */
  readonly image?: string;

  /**
   * Configuration for the runner.
   */
  readonly runnerConfiguration?: RunnerConfiguration;

  /**
   * VPC configuration.
   */
  readonly awsVpcConfiguration?: AwsVpcConfiguration;
  /**
   * Runner startup configuration.
   */
  readonly startup?: Startup;
}

export interface RunnerConfiguration {
  /**
   * The max amount of concurrent jobs the Attini Runner will execute.
   */
  readonly maxConcurrentJobs?: number;
  /**
   *The number of seconds the Attini Runner will stay alive without any jobs executing. New jobs will reset the countdown.
   */
  readonly idleTimeToLive?: number;
  /**
   * The number of seconds a job can execute before the Attini Runner aborts the execution.
   */
  readonly jobTimeout?: number;
  /**
   * The log level of the Attini Runner.
   */
  readonly logLevel?: string;
}


/**
 * The VPC configuration for the ECS task.
 *
 * If awsVpcConfiguration is omitted, Attini will use the default VPC and create a new security group resource in the init deploy stack.
 * The security group will have no inbound rules (no openings), but allow all outgoing traffic.
 */
export interface AwsVpcConfiguration {

  /**
   * A list of the subnet ids associated with the ECS task. For more information see the AWS ECS VPC documentation.
   *
   * For more information see the {@link https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_AwsVpcConfiguration.html AWS ECS VPC documentation}
   */
  readonly subnets?: Array<string>;

  /**
   * A list of the security group ids associated with the ECS task.
   *
   * For more information see the {@link https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_AwsVpcConfiguration.html AWS ECS VPC documentation}
   */

  readonly securityGroups?: Array<string>;

  /**
   * Whether the task's elastic network interface receives a public IP address. Default is false.
   **
   * For more information see the {@link https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_AwsVpcConfiguration.html AWS ECS VPC documentation}
   */

  readonly assignPublicIp?: boolean;
}


/**
 * Startup instructions for the Attini Runner.
 */
export interface Startup {

  /**
   * List of shell commands that are executed when the Attini Runner starts.
   */
  readonly commands?: Array<string>;

  /**
   * The number of seconds the startup commands can execute before the Attini Runner aborts the execution.
   */
  readonly commandsTimeout?: number;
}

export class AttiniRunner extends Construct {

  readonly runnerName: string;

  constructor(scope: Construct, id: string, props: AttiniRunnerProps) {
    super(scope, id);
    let copy: any = { ...props };


    if (props.awsVpcConfiguration?.subnets) {
      copy.awsVpcConfiguration.subnets = props.awsVpcConfiguration.subnets.join(',');
    }
    if (props.awsVpcConfiguration?.securityGroups) {
      copy.awsVpcConfiguration.securityGroups = props.awsVpcConfiguration.securityGroups.join(',');
    }
    if (props.awsVpcConfiguration?.assignPublicIp) {
      copy.awsVpcConfiguration.assignPublicIp = props.awsVpcConfiguration?.assignPublicIp ? 'ENABLED': 'DISABLED';
    }

    if (props.awsVpcConfiguration) {
      copy.awsVpcConfiguration = PropsUtil.fixCase(copy.awsVpcConfiguration);
    }

    if (props.runnerConfiguration) {
      copy.runnerConfiguration = PropsUtil.fixCase(copy.runnerConfiguration);
    }

    if (props.startup) {
      copy.startup = PropsUtil.fixCase(props.startup);
    }


    let cfnResource = new CfnResource(this, id, {
      type: 'Attini::Deploy::Runner',
      properties: PropsUtil.fixCase(copy),
    });

    this.runnerName = cfnResource.logicalId;
  }
}
