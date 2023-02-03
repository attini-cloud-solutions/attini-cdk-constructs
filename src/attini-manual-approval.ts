import { AttiniTask } from './attini-task';

export class AttiniManualApproval extends AttiniTask {
  type: string = 'AttiniManualApproval';

  protected renderProps(): object {
    return {};
  }

}
