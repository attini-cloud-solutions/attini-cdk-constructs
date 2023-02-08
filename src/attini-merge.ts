import { Construct } from 'constructs';
import { AttiniState } from './attini-state';

/**
 *
 * Some AWS StepFunction types return a list instead of an object, for example Parallel or Map.
 *
 * To make the payload easier to work with, the merge step can merge all the data in the list into one object.
 */
export class AttiniMerge extends AttiniState {

  type: string = 'AttiniMergeOutput';
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  protected renderProps(): object {
    return {};
  }
}
