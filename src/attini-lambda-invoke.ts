import { LambdaInvocationType } from 'aws-cdk-lib/aws-stepfunctions-tasks/lib/lambda/invoke';
import { Construct } from 'constructs';
import { AttiniState } from './attini-state';
import { PropsUtil } from './index';


export interface AttiniLambdaInvokeProps {
  /**
   * Lambda function to invoke.
   *
   */
  readonly functionName: string;
  /**
   * The JSON that will be supplied as input to the Lambda function.
   *
   */
  readonly payload?: object;
  /**
   * Invocation type of the Lambda function.
   */
  readonly invocationType?: LambdaInvocationType;
  /**
   * Up to 3583 bytes of base64-encoded data about the invoking client to pass to the function.
   *
   */
  readonly clientContext?: string;
  /**
   * Version or alias to invoke a published version of the function.
   *
   */
  readonly qualifier?: string;
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
