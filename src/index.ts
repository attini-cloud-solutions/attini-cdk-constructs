import { CfnResource } from 'aws-cdk-lib';
import { Chain, State, StateGraph } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';


export interface DeploymentPlanProps {
  readonly states?: Array<State>;
  readonly definition?: Chain;
}

export class DeploymentPlan extends Construct {


  constructor(scope: Construct, id: string, props: DeploymentPlanProps) {
    super(scope, id);

    let states: any;

    if (props.states != null) {
      states = this.createSimplePlan(props.states);
    } else if (props.definition) {
      states = new StateGraph(props.definition.startState, 'not important').toGraphJson();
    }


    new CfnResource(this, id, {
      type: 'Attini::Deploy::DeploymentPlan',
      properties: {
        DeploymentPlan: states,
      },
    });
  }

  private createSimplePlan(states: Array<State>) {
    return states.map(value => {
      let json = <any>value.toStateJson();
      delete json.End;
      delete json.Next;
      json.Name = value.id;
      return json;
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
  readonly subnets?: [string];
  readonly securityGroups?: [string];
  readonly assignPublicIp?: string;
}

export interface Startup {
  readonly commands?: [string];
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

    new CfnResource(this, id, {
      type: 'Attini::Deploy::Runner',
      properties: this.fixCase(copy),
    });
  }

  private fixCase(props: any): object {
    let copy: any = {};
    Object.entries(props).forEach(([key, value]) => {
      if (typeof value === 'object' && !(value instanceof Array)) {
        value = this.fixCase(value);
      }
      copy[key.charAt(0).toUpperCase() + key.slice(1)] = value;
    });
    return copy;
  }
}
export * from './attini-state';
export * from './attini-merge';
export * from './attini-runner-job';
