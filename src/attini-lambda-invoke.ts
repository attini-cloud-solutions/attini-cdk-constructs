import { Construct } from 'constructs';
import { AttiniState } from './attini-state';
import { PropsUtil } from './index';


export interface AttiniLambdaInvokeProps {
  readonly functionName: string;
  readonly payload?: object;
}

export class AttiniLambdaInvoke extends AttiniState {
  type: string = 'AttiniLambdaInvoke';


  constructor(scope: Construct, id: string, private props: AttiniLambdaInvokeProps) {
    super(scope, id);
  }

  protected renderProps(): object {
    return {
      Parameters: PropsUtil.fixCase(this.props),
    };
  }
}
