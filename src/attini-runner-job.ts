import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';

export class AttiniRunnerJob extends AttiniTask {

  type: string = 'AttiniRunnerJob';

  constructor(scope: Construct, id: string, private props: AttiniRunnerJobProps ) {
    super(scope, id);
    this.props = props;
  }

  protected renderProps(): object {
    let finalProperties: {[k: string]: any} = {
      Commands: this.props.commands,
    };
    if (this.props.runner) {
      finalProperties.Runner = this.props.runner;
    }
    return { Properties: finalProperties };
  }


}

export interface AttiniRunnerJobProps {
  readonly runner?: string;
  readonly commands: Array<string>;
}
