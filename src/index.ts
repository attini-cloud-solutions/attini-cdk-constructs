import { CfnResource } from 'aws-cdk-lib';
import { Chain, CustomState, State, StateGraph } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';


export class AttiniMerge extends CustomState {


  constructor(scope: Construct, id: string) {
    super(scope, id, { stateJson: [] });
  }

  toStateJson(): object {
    return {
      Type: 'AttiniMerge',
      ...this.renderNextEnd(),
    };
  }

}

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
      states =new StateGraph(props.definition.startState, 'not important').toGraphJson();
    }


    new CfnResource(this, 'DeploymentPlan', {
      type: 'Attini::Deploy::DeploymentPlan',
      properties: {
        DeploymentPlan: states,
      },
    });
  }

  private createSimplePlan( states:Array<State>) {
    return states.map(value => {
      let json = <any>value.toStateJson();
      delete json.End;
      delete json.Next;
      json.Name = value.id;
      return json;
    });

  }

}
