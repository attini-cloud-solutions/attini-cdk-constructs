import { CfnResource } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PropsUtil } from './index';

export interface AttiniRunnerProps {
  readonly taskDefinitionArn?: string;
  readonly containerName?: string;
  readonly ecsCluster?: string;
  readonly roleArn?: string;
  readonly image?: string;
  readonly runnerConfiguration?: RunnerConfiguration;
  readonly awsVpcConfiguration?: AwsVpcConfiguration;
  readonly startup?: Startup;
}

export interface RunnerConfiguration {
  readonly maxConcurrentJobs?: number;
  readonly idleTimeToLive?: number;
  readonly jobTimeout?: number;
  readonly logLevel?: string;
}

export interface AwsVpcConfiguration {
  readonly subnets?: Array<string>;
  readonly securityGroups?: Array<string>;
  readonly assignPublicIp?: boolean;
}

export interface Startup {
  readonly commands?: Array<string>;
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