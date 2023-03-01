import { JsonPath } from 'aws-cdk-lib/aws-stepfunctions';
import { AttiniState } from './attini-state';

export abstract class AttiniTask extends AttiniState {

  /**
   *
   * Get the json path to this steps output. Convenience
   * method that will return a string with the following format
   * $.output.<id>.<path>.<path>
   *
   * @param {string[]} [paths] - The path to the value from the outputs root.
   *
   */
  public getOutputPath(...paths: string[]) {
    if (paths.length !== 0) {
      let path = paths.join('.');
      return '$.output.' + this.id + '.' + path;
    }
    return '$.output.' + this.id;
  }

  /**
   *
   * Get a string value from the steps output.
   * This method can only be used as the value for a key/value pair in another Attini or
   * StepFunction step.
   *
   * @example
   * Valid examples:
   *
   * {my-key: step.getOutput()}
   * {my-key: step.getOutput('path','to','key')}
   *
   * @example
   * Invalid examples:
   *
   * {my-key: 'test'+ step.getOutput()}
   * {my-key: '[step.getOutput()]}
   *
   * @param {string[]} [paths] - The path to the value from the outputs root.
   *
   */
  public getOutput(...paths: string[]) {
    return JsonPath.stringAt(this.getOutputPath(...paths));
  }
}
