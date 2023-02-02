import { Construct } from 'constructs';
import { AttiniState } from './attini-state';

export class AttiniMerge extends AttiniState {

  type: string = 'AttiniMergeOutput';
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  protected renderProps(): object {
    return {};
  }
}
