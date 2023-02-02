import { AttiniState } from './attini-state';

export class AttiniManualApproval extends AttiniState {
  type: string = 'AttiniManualApproval';

  protected renderProps(): object {
    return {};
  }

}
