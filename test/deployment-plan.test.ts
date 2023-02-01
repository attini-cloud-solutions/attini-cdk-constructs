import { App, Duration, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Wait, WaitTime } from 'aws-cdk-lib/aws-stepfunctions';
import { DeploymentPlan } from '../src';
import { AttiniMerge } from '../src/attini-merge';

test('should create template from definition', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let props = {
    definition:
        new Wait(stack, 'wait some', {
          time: WaitTime.duration(Duration.seconds(100)),
        }).next(new AttiniMerge(stack, 'merges'))
          .next(new AttiniMerge(stack, 'merge2')),
  };
  new DeploymentPlan(stack, 'testing-stack', props);
  const template = Template.fromStack(stack);
  template.hasResourceProperties('Attini::Deploy::DeploymentPlan', {});
});


test('should create template from list', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp);
  let props = {
    states: [
      new Wait(stack, 'wait some', {
        time: WaitTime.duration(Duration.seconds(100)),
      }),
    ],
  };
  new DeploymentPlan(stack, 'testing-stack', props);
  const template = Template.fromStack(stack);
  template.hasResourceProperties('Attini::Deploy::DeploymentPlan', {});
});
