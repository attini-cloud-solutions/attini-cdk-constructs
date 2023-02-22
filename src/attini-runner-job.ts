import { FieldUtils } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { AttiniTask } from './attini-task';

/**
 * The AttiniRunnerJob is a quick and cost-efficient way to run shell commands using a container.
 */
export class AttiniRunnerJob extends AttiniTask {

  type: string = 'AttiniRunnerJob';

  constructor(scope: Construct, id: string, private props: AttiniRunnerJobProps) {
    super(scope, id);
    this.props = props;
  }

  protected renderProps(): object {
    let finalProperties: { [k: string]: any } = {
      Commands: this.props.commands,
    };

    if (this.props.environment) {
      finalProperties.Environment = this.props.environment;
    }
    if (this.props.runner) {
      finalProperties.Runner = this.props.runner;
    }
    return { Properties: FieldUtils.renderObject(finalProperties) };
  }


}

export interface AttiniRunnerJobProps {

  /**
   * A reference to an {@link AttiniRunner} to use for executing the job.
   * Use {@link AttiniRunner.runnerName} to get a reference.
   *
   * If omitted the Attini default runner will be used.
   */
  readonly runner?: string;

  /**
   * A list of shell commands that will be executed by the Runner.
   */
  readonly commands: Array<string>;

  /**
   * Environment variables that will be set in the shell for the runner job.
   */
  readonly environment?: { [key: string]: string };
}
