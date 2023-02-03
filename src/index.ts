import { CfnResource, Stack, StackProps } from 'aws-cdk-lib';
import { Chain, StateGraph } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';


export interface DeploymentPlanProps {
  readonly definition: Chain;
}

export class DeploymentPlanStack extends Stack {

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    this.addTransform('AttiniDeploymentPlan');
    this.addTransform('AWS::Serverless-2016-10-31');
  }
}

export class DeploymentPlan extends Construct {


  constructor(scope: Construct, id: string, props: DeploymentPlanProps) {
    super(scope, id);

    new CfnResource(this, id, {
      type: 'Attini::Deploy::DeploymentPlan',
      properties: {
        DeploymentPlan: new StateGraph(props.definition.startState, 'not important').toGraphJson(),
      },
    });
  }

}

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
  readonly assignPublicIp?: string;
}

export interface Startup {
  readonly commands?: Array<string>;
  readonly commandsTimeout?: number;
}

export class AttiniRunner extends Construct {

  readonly runnerName: string;

  constructor(scope: Construct, id: string, props: AttiniRunnerProps) {
    super(scope, id);
    this.runnerName = id;
    let copy: any = { ...props };


    if (props.awsVpcConfiguration?.subnets) {
      copy.awsVpcConfiguration.subnets = props.awsVpcConfiguration.subnets.join(',');
    }
    if (props.awsVpcConfiguration?.securityGroups) {
      copy.securityGroups.securityGroups = props.awsVpcConfiguration.securityGroups.join(',');
    }

    if (props.awsVpcConfiguration) {
      copy.securityGroups = PropsUtil.fixCase(props.awsVpcConfiguration);
    }

    if (props.runnerConfiguration) {
      copy.runnerConfiguration = PropsUtil.fixCase(props.runnerConfiguration);
    }

    if (props.startup) {
      copy.startup = PropsUtil.fixCase(props.startup);
    }


    new CfnResource(this, id, {
      type: 'Attini::Deploy::Runner',
      properties: PropsUtil.fixCase(copy),
    });
  }
}

export class PropsUtil {
  static fixCase(props: any): object {
    let copy: any = {};
    Object.entries(props).forEach(([key, value]) => {
      copy[key.charAt(0).toUpperCase() + key.slice(1)] = value;
    });
    return copy;
  }
}

export * from './attini-state';
export * from './attini-merge';
export * from './attini-runner-job';
export * from './attini-cfn';
export * from './attini-manual-approval';
export * from './attini-import';
export * from './attini-lambda-invoke';
export * from './attini-sam';
