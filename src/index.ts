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
export * from './attini-task';
export * from './attini-runner';
