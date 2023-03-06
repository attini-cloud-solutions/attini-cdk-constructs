import { JsonPath } from 'aws-cdk-lib/aws-stepfunctions';


/**
 * Utility class for reading values from the payload of an Attini deployment plan.
 * Each method can only be used as the value of a key/value pair in an Attini or
 * StepFunction step.
 *
 * @example
 * Valid example:
 *
 * {my-key: AttiniPayload.environment()}
 *
 * Invalid examples:
 *
 * {my-key: 'test'+ AttiniPayload.environment()}
 * {my-key: '[step.AttiniPayload.environment()]}
 *
 *
 */

export abstract class AttiniPayload {

  public static readonly ENVIRONMENT_PATH: string = '$.deploymentOriginData.environment';

  public static readonly DISTRIBUTION_NAME_PATH: string = '$.deploymentOriginData.distributionName';


  public static readonly DISTRIBUTION_VERSION: string = '$.deploymentOriginData.version';

  public static readonly STACK_PARAMETERS_PATH: string = '$.stackParameters';


  public static environment(): string {
    return JsonPath.stringAt(AttiniPayload.ENVIRONMENT_PATH);
  }

  public static distributionName(): string {
    return JsonPath.stringAt(AttiniPayload.DISTRIBUTION_NAME_PATH);
  }

  public static stackParameter(parameterName: string): string {
    return JsonPath.stringAt(AttiniPayload.STACK_PARAMETERS_PATH + '.' + parameterName);
  }

  public static version(): string {
    return JsonPath.stringAt(AttiniPayload.DISTRIBUTION_VERSION);
  }


}
