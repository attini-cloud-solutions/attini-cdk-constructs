import { FieldUtils } from 'aws-cdk-lib/aws-stepfunctions';
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
   * If not specified then the entire payload will be passed.
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

/**
 * AttiniLambdaInvoke will call a Lambda function while preserving the payload for subsequent steps.
 *
 */
export class AttiniLambdaInvoke extends AttiniState {
  type: string = 'AttiniLambdaInvoke';


  constructor(scope: Construct, id: string, private props: AttiniLambdaInvokeProps) {
    super(scope, id);
  }

  protected renderProps(): object {
    return {
      Parameters: FieldUtils.renderObject(PropsUtil.fixCase(this.props)),
    };
  }
}
