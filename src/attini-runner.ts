import { CfnResource } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PropsUtil } from './index';

export interface AttiniRunnerProps {

  /**
   * Fargate ECS task definition that the Attini Runner should use.
   *
   * If omitted, then Attini will use its default task definition.
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

  /**
   * Configures an EC2 instance to host the Runner ECS task.
   * By default, Attini Runners use Fargate, but you can use EC2 instead.
   * This is useful if you want to start a container from the ECS container, which is currently not possible with Fargate.
   */
  readonly ec2Configuration?: Ec2Configuration;
}

export interface Ec2Configuration {
  /**
   * The instance type of the EC2 instance that will host the Runner.
   */
  readonly instanceType: string;

  /**
   * The instance profile name for the EC2 instance. If omitted, then Attini will create
   * an instance profile with the Runners default role.
   */
  readonly instanceProfileName?: string;

  /**
   * The AMI to use. Can be specified as an imageId, starting with "ami-", or a short hand name like, AmazonLinux2, AmazonLinux2_arm64 etc.
   * For a complete list, please see the documentation.
   *
   * Will default to AmazonLinux2
   */
  readonly ami?: string;
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

  /**
   * Returns a reference to the runner that can be used by the {@link AttiniRunnerJob} step.
   * Pass it to {@link AttiniRunnerJobProps.runner}.
   */
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
      copy.awsVpcConfiguration.assignPublicIp = props.awsVpcConfiguration?.assignPublicIp ? 'ENABLED' : 'DISABLED';
    }

    if (props.awsVpcConfiguration) {
      copy.awsVpcConfiguration = PropsUtil.fixCase(copy.awsVpcConfiguration);
    }

    if (props.runnerConfiguration) {
      copy.runnerConfiguration = PropsUtil.fixCase(copy.runnerConfiguration);
    }

    if (props.ec2Configuration) {
      copy.ec2Configuration = PropsUtil.fixCase(copy.ec2Configuration);
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
