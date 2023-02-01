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
