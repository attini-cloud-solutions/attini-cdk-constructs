import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';

export class AttiniManualApproval extends AttiniTask {

  type: string = 'AttiniManualApproval';

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  protected renderProps(): object {
    return {};
  }

}
