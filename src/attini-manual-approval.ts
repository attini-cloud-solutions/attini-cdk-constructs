import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';

/**
 * The manual approval step will pause the deployment plan and wait for confirmation before continuing.
 * The deployment can be resumed by running the "attini deploy continue" command with the Attini CLI.
 */
export class AttiniManualApproval extends AttiniTask {

  type: string = 'AttiniManualApproval';

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  protected renderProps(): object {
    return {};
  }

}
